import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    removeExpense = () => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense} // the expense we obtained from the store according to the id 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.removeExpense}>Remove</button>
            </div>
        )
    }
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

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (id) => dispatch( removeExpense({id: id}) ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);