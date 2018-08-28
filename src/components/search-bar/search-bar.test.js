import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchBar from './search-bar';

describe('SearchBar', () => {
  test('should display an icon if given one', () => {
    const expected = "blank";
    const app = mount(<SearchBar imgSrc="blank"/>);
    const actual = app.props().imgSrc;
    expect(actual).toEqual(expected);
  });

  test('should perform search action when clicked on', () => {
    const expected = false;
    const app = shallow(<SearchBar imgSrc='blank'/>);
    app.instance().search('click');
    const actual = app.props().isVisible;
    expect(actual).toEqual(expected);
  });

  test('updateSearch method should be called when input changes', () => {
    const expected = "test";
    const app = mount(<SearchBar imgSrc='test'/>);
    app.find('.search-filter').simulate('change', {target: {value: 'test'}});
    const actual = app.state().searchTerm;
    expect(actual).toEqual(expected);
  })
});