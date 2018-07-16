import {GET_ACTIONS} from './action-button.actions';

const defaultState = {action: () => alert('no action input')}
const actions = {placeHolder: () => alert('placeholder action')}

const actionButton = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ACTIONS:
            return {
                ...state,
                action: actions.placeHolder
            }
        default: 
         return state
    }
}

export default actionButton;