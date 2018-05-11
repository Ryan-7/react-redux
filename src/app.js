import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';

const store = configureStore();
 
let state;

store.subscribe(() => {
    state = store.getState();
    console.log(store.getState())
})

store.dispatch({ type: 'test', name: 'kyle'})
store.dispatch({ type: 'test', name: 'jim'})


store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 100000000}));






const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(store.getState());

console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter/>     
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));