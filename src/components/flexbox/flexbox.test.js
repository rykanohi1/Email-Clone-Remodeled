import React from 'react';
import {shallow} from 'enzyme';
import Flexbox from './flexbox.js';

describe ('Flexbox', () => {
    test ('should display some text', () => {
        const testValue = '1';
        const app = shallow(<Flexbox sampleText={testValue}/>);
        expect(app.text()).toBe(testValue);
    });
})