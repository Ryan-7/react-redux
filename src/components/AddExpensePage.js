import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <p>Add Expense Component</p>
        <form  onSubmit={(e) => {
            e.preventDefault();
            let description = e.target.elements.expense.value;
            props.dispatch(addExpense({description}));
        }}>
        <input type="text" placeholder="Item description"  name="expense" />
        <button>Add expense</button>
        </form>
    </div>
)

export default connect()(AddExpensePage);