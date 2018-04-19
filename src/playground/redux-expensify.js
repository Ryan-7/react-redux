import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({ // implicit return 
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note, 
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}) => ({ // need to set to an empty object or we will get errors when trying to find a property 
    type: 'REMOVE_EXPENSE',
    id
}) 

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})



const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    amount: 0
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense] // spread operator - create new array with previous array and new items

        case 'REMOVE_EXPENSE': 
            return state.filter(( { id }) => id !== action.id);
        
        case 'EDIT_EXPENSE':
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        ...action.updates
                    }
                } else {
                    return item;
                }
            })
            // find object, { ...object, action.updates}
        default: 
            return state;
    }
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default: 
            return state;
    }
}

// Get visible expenses

// First you find items that match the critera: text, startDate and endDate
// Then you sort those items that meet the criteria by amount or date 

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
            return a.amount < b.createdAt ? 1 : -1;
        }
    })
}




const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));


store.subscribe(() => {         // runs every time dispatch or replaceReducer is called. 
    const state = store.getState(); // get the state (expenses array, filters object)
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log('Visible Expenses')
    console.log(visibleExpenses); // what we output on the screen, not actually changing state
})


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 })); // dispatch will pass the object through both reducers 
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'SF Coffee', amount: 500 })); 

store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // should set to undefined
// store.dispatch(setEndDate(1250)); // endDate 1250 

const demoState = {
    expenses: [{
        id: '1',
        description: 'January Rent',
        note: 'This was the final pmt for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};


let user = {
    name: "Jen",
    age: 29
}

let newInfo = {
    location: "Madison",
    age: 25
}

console.log({ ...user, ...newInfo });