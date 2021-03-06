import React from 'react';
import { connect } from 'react-redux'; // allows us to connect to the store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import moment from 'moment';


export const ExpenseList = (props) => ( // We are exporting this for testing purposes only. With testing, we don't want to test the connected component
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((item) => {
                    // return <ExpenseListItem description={item.description} amount={item.amount} createdAt={item.createdAt}/>
                    return <ExpenseListItem key={item.id} {...item} />
                 })
            )
        }
    </div>
);

// As the store changes, the component will re-render, it's reactive
// state gives us access to anything on our store 
// this object is appended to our props and can be used 

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters), // this now exists on our component as props.expenses, we are enhancing our component
        stuff: state.nickname
    }
}

export default connect(mapStateToProps)(ExpenseList);



// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);

// export default ConnectedExpenseList;