import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}        // need this to prevent the error since there is no 'e' for event 
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0); // the error property on state should be more than 0 if we have an error for the value

    expect(wrapper).toMatchSnapshot(); // Make sure the error is atually there when rendered
});


test('should set description on input change', () => {
    
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(0).simulate('change', { // change because our input changes on any change like typing
        target: { value: value }    // don't have access to e, so we pass in our own so.. e.target.value === target.value = value
    });
    expect(wrapper.state('description')).toBe(value);
});


test('should set note on textarea change', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('textarea').simulate('change', {
        target: { value: value }
    });
    expect(wrapper.state('note')).toBe(value);
});


test('should set amount if valid input', () => {
    const value = '55.00';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: { value: value }
    });

    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if valid input', () => {
    const value = '25.000';
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('input').at(1).simulate('change', {
        target: { value: value }
    });

    expect(wrapper.state('amount')).toBe('');
});


test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn(); // creates the spy funcion and assigns it to whatever variable you want
    
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>) // pass in the spy instead of our normal submit

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {} 
    });

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })

    // Simple Example of using a spy: 
    // onSubmitSpy('Ryan', 'Madison');
    // expect(onSubmitSpy).toHaveBeenCalledWith('Ryan', 'Madison');
})


test('should set new date on date change', () => {
    const now = moment();

    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now); // calling onDateChange from the datepicker and passing in moment (now)

    expect(wrapper.state('createdAt')).toEqual(now);

});

test('should set focus onFocusChange', () => {
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({'focused': true})
    expect(wrapper.state('calendarFocused')).toEqual(true);
});

