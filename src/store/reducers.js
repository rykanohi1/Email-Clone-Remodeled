import {combineReducers} from 'redux';
import folderList from '../containers/folder-list/folder-list-reducers';
import actionButton from 'components/action-button/action-button.reducers';
import contactList from 'components/contact-list/contact-list.reducers';
import dropDown from 'components/drop-down/drop-down.reducers';
import profile from 'components/profile/profile.reducers';

export default combineReducers ({
    folderList,
    actionButton,
    contactList,
    dropDown,
    profile
})