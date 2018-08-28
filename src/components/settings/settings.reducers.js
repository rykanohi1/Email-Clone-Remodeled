import {CHANGE_VISIBILITY} from './settings.actions';

const defaultState = {isHidden: true};

const toggled = {ishidden: false};

const settings = (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_VISIBILITY: 
            return {
                ...state,
                isHidden: toggled.isHidden
            }
        default:
            return state
    }
}

export default settings;