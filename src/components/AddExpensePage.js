import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit} 
                />
            </div>
        )
    }

}


// A way to extract the dispatch functions away from the component itself 

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    };
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);







// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm onSubmit={(expense) => {
//             console.log(expense);
//             props.dispatch(addExpense(expense));
//             props.history.push('/');
//         }}/>
//     </div>
// )

// export default connect()(AddExpensePage);
