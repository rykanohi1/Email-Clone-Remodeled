import React from 'react';
import {render} from 'enzyme';
import FolderList from './folder-list'

describe ('Folder', ()=> {
    test ('should display a list of folders', () => {
        const expected = 3;
        const folders = [{label: 'test1', hasUnread: false, count: 1, id: 1},
        {label: 'test2', hasUnread: false, count: 2, id: 2},
        {label: 'test3', hasUnread: false, count: 3, id: 3}];
        const app = render(<FolderList folders={folders}/>);
        const actual = app.find('.folder').length;

        expect(actual).toEqual(expected);
    })
});