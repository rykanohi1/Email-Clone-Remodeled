import React from 'react';
import {shallow, render} from 'enzyme';
import Folder from './folder'

describe ('Folder', ()=> {
    test ('should display the title of the folder', () => {
        const expected = 'title';
        const app = render(<Folder label={expected}/>);
        const actual = app.find('.folder-title').text().trim();

        expect(actual).toEqual(expected);
    });
    test ('should have selected class when folder is selected', () => {
        const expected = 1;
        const app = shallow(<Folder isSelected={true}/>);
        const actual = app.find('.selected').length;
        
        expect(actual).toEqual(expected);
    });
});