const expensesTotal = (expenses) => {
    const amountSum = expenses.reduce((a, b) => +a + +b.amount, 0);
    return amountSum;

}

export default expensesTotal;