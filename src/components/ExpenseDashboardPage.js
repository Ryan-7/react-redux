import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => {
    return (
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
}




// Use this syntax for Stateless Functional Components
export default ExpenseDashboardPage;


// If it was a ES6 class component, use this syntax:
// export default class ExpenseDashboardPage extends React.Component {}