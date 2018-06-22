import React from 'react';
import {shallow, render, mount} from 'enzyme';
import ContactList from './contact-list';

describe('ContactList', () => {
    test('should display given profile picture', () => {
        const contacts = [{id: 1, username: "test 1", address: "blank", imgSrc: "image"},
                          {id: 2, username: "test 2", address: "blank", imgSrc: "image"},
                          {id: 3, username: "test 3", address: "blank", imgSrc: "image"}];
        const expected = 3;
        const app = render(<ContactList contacts={contacts}/>);
        const actual = app.find('.left-right-layout.contact').length;
        expect(actual).toEqual(expected);
    })
});