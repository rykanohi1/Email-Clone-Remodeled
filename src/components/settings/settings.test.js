import React from 'react';
import Settings from './settings';
import {shallow, mount} from 'enzyme';

describe ('Settings', () => {
    test('should display menu when clicked on', () => {
        const expected = true;
        const app = mount(<Settings imgSrc='test'/>);
        app.find('ActionButton').simulate('click');
        const actual = app.find('.menu').hasClass('menu show');
        expect(actual).toEqual(expected);
    })
});