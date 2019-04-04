import React from 'react';
import Settings from './profile';
import {shallow, mount} from 'enzyme';

describe ('Settings', () => {
    test('should display menu when clicked on', () => {
        const expected = true;
        const app = mount(<Settings imgSrc='test'/>);
        app.find('.action-button.toggle-menu').simulate('click');
        const actual = app.find('.menu').hasClass('menu show');
        expect(actual).toEqual(expected);
    });
    test('should hide menu when close button is pressed', () => {
        const expected = false;
        const app = mount(<Settings imgSrc='test'/>);
        app.find(".action-button.toggle-menu").simulate('click');
        app.find(".action-button.hide-menu").simulate('click');
        const actual = app.find('.menu').hasClass('menu show');
        expect(actual).toEqual(expected);
    });
    test('should hide menu when clicked out of', () => {
        const expected = true;
        const app = mount(<Settings imgSrc='test'/>);
        app.find('.action-button.toggle-menu').simulate('click');
        app.find(".toggle-mask").simulate('click');
        const actual = app.find('.menu').hasClass('menu hide');
        expect(actual).toEqual(expected);
    });
});