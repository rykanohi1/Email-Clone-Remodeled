import React from 'react';
import {createStore, combineReducers} from 'redux';
import ContactReducer from './reducers/reducer-contacts-stories';

const Reducers = combineReducers({
    contacts: {ContactReducer}
});
const storeData = createStore(Reducers); 

export default storeData;