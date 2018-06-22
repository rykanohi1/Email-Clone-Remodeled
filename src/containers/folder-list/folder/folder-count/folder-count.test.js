import React from 'react';
import {shallow} from 'enzyme';
import FolderCount from './folder-count';


describe('FolderCount', () => {
    test('should display a number', () => {
        const testValue = '1'
        const app = shallow(<FolderCount count={testValue}/>);
        expect(app.text()).toBe(testValue);
    })
    test('should display if has unread', () => {
        const testValue = true;
        const app = shallow(<FolderCount hasUnread={testValue}/>);

        expect(app.hasClass('has-unread')).toBe(testValue);
    })
    test ('should display if no unread', () => {
        const testValue = false;
        const app = shallow(<FolderCount hasUnread={testValue}/>);

        expect(app.hasClass('has-unread')).toBe(testValue);
    }) 
})

