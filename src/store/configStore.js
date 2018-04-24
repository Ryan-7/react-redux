import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// const nameDefault = {
//     nickname: "Tim"
// }

// const nameReducer = (state = nameDefault, action) => {
//     switch(action.type) {
//         default: 
//             return state;
//     }
// }

const nameReducer = (state = [], action) => {
    if (action.type === 'test') {
        return [...state, action.name];
    }
    else {
        return state;
    }
}

const someOtherReducer = () => 'hello'


export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        nickname: nameReducer,
        whatever: someOtherReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

    return store;
}



// Import the function, and by calling it we will get the store back so we can use it. 

