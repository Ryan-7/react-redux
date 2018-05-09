import React from 'react';
import { connect } from 'react-redux'; // allows us to connect to the store
import expensesTotal from '../selectors/expensesTotal';
import getVisibleExpeneses from '../selectors/expenses'
import numeral from 'numeral';

export const ExpensesSummary = ({ numOfExpenses, totalAmounts }) => (
    <div>
        <p>Expenses Summary</p>
        <p>Viewing {numOfExpenses} {numOfExpenses === 1 ? 'expense' : 'expenses'} totaling {numeral(totalAmounts / 100).format('$0,0.00')}</p>
    </div>
)


const mapStateToProps = (state) => {
    return {
        totalAmounts: expensesTotal(getVisibleExpeneses(state.expenses, state.filters)),
        numOfExpenses: getVisibleExpeneses(state.expenses, state.filters).length
    }
}

export default connect(mapStateToProps)(ExpensesSummary);