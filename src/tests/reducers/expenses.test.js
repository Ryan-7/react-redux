import expenseReducer from '../../reducers/expenses';

test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
})



test('should add expense to the state', () => {
    const newExpense = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'Water Bill', 
            amount: 4500 
        } 
    }

    const state = expenseReducer(undefined, newExpense);

     expect(state[0]).toEqual(newExpense.expense);
})