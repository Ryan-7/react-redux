import { createStore } from 'redux';

// Action Generators - functions that return action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({ // need to default to object because if we try to acess a property on an undefined object we'll get an error
    type: 'INCREMENT', // implicit return 
    incrementBy
}); 

const decrementCount = ( { decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({ 
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Store tracks our changing data over time
// Need to pass in function for first argument
// Also need to pass in current state into that function 
// If there is no previous state, set to empty object 
// Finally, we return the state object

// Gets called when first create and after everytime dispatch is called 

const countReducer = ((state = { count: 0 }, action) => { 
    switch(action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default: 
            return state;
    }
});

const store = createStore(countReducer); 

store.subscribe(() => { // this gets called everytime there is a change to the store 
    console.log(store.getState());
})

// Actions - an object that get sents to the store 
// Actions examples: increment the count, reset count to zero, etc. 


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount( { count: 100 }));

store.dispatch(resetCount());