import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary numOfExpenses={1} totalAmounts={100} />);
    expect(wrapper).toMatchSnapshot();

})

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary numOfExpenses={23} totalAmounts={100} />);
    expect(wrapper).toMatchSnapshot();
})