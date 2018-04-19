const expensesReducerDefaultState = [];

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

export default expensesReducer;