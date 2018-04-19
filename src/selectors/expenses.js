const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate } = {}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; // we check to see if it's a number because if its not that means it was undefined and not provided, so the variable is set to true (do not want to filter it out if no value provided)
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); // if not undefined, then this will run

        return startDateMatch && endDateMatch && textMatch; // if these are all true, return that particular expense
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; 
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

export default getVisibleExpenses;