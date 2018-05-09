import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// props is one giant object, react will combine it all for you:
// the props from the parent, and the props from connect (dispatch, etc), props from the store, etc.
// props are props

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            - 
            {console.log(createdAt)}
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>

    </div>
)

// No need for the mapStateToProps function if we're not using the state.
// Want to connect so we can access dispatch

export default ExpenseListItem;


