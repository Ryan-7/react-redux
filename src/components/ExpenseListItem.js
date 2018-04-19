import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// props is one giant object, react will combine it all for you:
// the props from the parent, and the props from connect (dispatch, etc), props from the store, etc.
// props are props

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
)

// No need for the mapStateToProps function if we're not using the state.
// Want to connect so we can access dispatch

export default connect()(ExpenseListItem);


