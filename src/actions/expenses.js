import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({ // implicit return 
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note, 
        amount,
        createdAt
    }
});

export const removeExpense = ({ id } = {}) => ({ // need to set to an empty object or we will get errors when trying to find a property 
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

