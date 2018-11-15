import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Products from './Components/Products';
import App from './App';
import Header from './Components/Header'
import Search from './Components/Search';
import Sort from './Components/Sort'

configure({adapter: new Adapter()});

describe('<App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render <Products /> elements after fetching data from API', () => {       
      expect(wrapper.find(Products)).toHaveLength(1);
    });
    it('should an exact Header, Search, Sort component', () => {
        expect(wrapper.contains(<Header/>,<Search/>, <Sort/>)).toEqual(true);
    }); 
});