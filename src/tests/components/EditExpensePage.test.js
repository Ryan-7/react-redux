import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

test('should render EditExpensePage correctly', () => {

    // we are mocking a function so we can snapshot that we have a function there, it's shallow, just comparing jsx

    const editExpense = jest.fn();
    const history = { push: jest.fn() };

    const wrapper = shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpense} history={history} />)
    expect(wrapper).toMatchSnapshot();

})


test('should handle editExpense', () => {
    const editExpense = jest.fn();
    const history = { push: jest.fn() };

    const wrapper = shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpense} history={history}/>)

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    
})

test('should handle remove expense', () => {
    const removeExpense = jest.fn();
    const editExpense = jest.fn();
    const history = { push: jest.fn() };

    const wrapper = shallow(<EditExpensePage expense={expenses[0]} removeExpense={removeExpense} history={history}/>)

    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
     
})