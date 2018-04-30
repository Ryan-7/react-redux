import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'; // dummy data 




test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
})



test('should add expense to the state', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '109',
            description: 'Water Bill', 
            amount: 4500,
            note: '',
            createdAt: 2000
        } 
    }

    const state = expenseReducer(expenses, action);

     expect(state).toEqual([ ...expenses, action.expense]);
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expenseReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
})


test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expenseReducer(expenses, action);

    expect(state).toEqual(expenses);
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            amount: 2000
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state[1].amount).toBe(action.updates.amount);
})


test('should not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1'
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})