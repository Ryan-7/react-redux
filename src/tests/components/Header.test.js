import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


test('should render Header correctly', () => {

    const wrapper = shallow(<Header />);    // wrapper is the common naming convention
    expect(wrapper).toMatchSnapshot();
})
