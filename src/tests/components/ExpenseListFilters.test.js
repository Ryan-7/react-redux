import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;


// This is called before each test case so we have fresh variables 
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    
    // need to pass in the altFixtures as a prop
    // setProps is provided by Enzyme, NOT react 
    wrapper.setProps({
        filters: altFilters
    })

    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: {
            value: value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
});

test('should sort by date', () => {

    // Since we sort by date by default, let's set it to amount first:
    wrapper.setProps({
        filters: altFilters
    })

    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {
            value: value
        }
    })
    expect(sortByDate).toHaveBeenCalled();
});



test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {
            value: value
        }
    })
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(5, 'years');

    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: startDate, endDate: endDate })

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should hanlde date focus changes', () => {
    const calendarFocused = 'endDate';

    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})