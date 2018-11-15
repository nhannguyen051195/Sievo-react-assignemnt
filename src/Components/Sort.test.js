import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form } from 'react-bootstrap';
import Sort from './Sort'

configure({ adapter: new Adapter() });

describe('<Sort/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Sort />);
    });

    it('should have a Form elememnt', () => {
        expect(wrapper.find(Form)).toHaveLength(1);
    });
    it('should have a Select and Optiton elememnt', () => {
        expect(wrapper.contains(
        <select className='form-control'>
        <option value={1}>Increasing</option>
        <option value={2}>Decreasing</option>
        </select>)).toEqual(false)
    });
});


