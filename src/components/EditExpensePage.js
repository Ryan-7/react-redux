import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense} // the expense we obtained from the store according to the id 
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
                removeExpense={(t) => {
                    props.dispatch(removeExpense({id: props.expense.id}));
                    props.history.push('/');
                }}
            />
        </div>
    )
}


// Can also access the props in the regular component in the HOC component as well, so we can get the param id for example
// Remember, what is returned here is just amended to our component above and can be accessed through props

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);