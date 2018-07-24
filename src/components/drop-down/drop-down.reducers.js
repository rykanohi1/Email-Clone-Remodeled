import {GET_ITEMS} from './drop-down.actions';

const defaultState = {test: [],appLauncher: []};
                      
const items = {
    test: [
        {
            id: 'slot 1', value: {
                title: 'slot 1',
                label: 'says hello',
                action: () => alert('Hello')
            }
        },

        {
            id: 'slot 2', value: {
                title: 'slot 2',
                label: 'conversation continues',
                action: () => alert('How nice to see you!')
            }
        },

        {
            id: 'slot 3', value: {
                title: 'slot 3',
                label: 'says goodbye',
                action: () => alert('goodbye!')
            }
        }
    ],
    appLauncher: [
        {
            id: 'slot 1', value: {
                title: 'slot 1',
                label: 'says hello',
                action: () => alert('Hello')
            }
        },

        {
            id: 'slot 2', value: {
                title: 'slot 2',
                label: 'conversation continues',
                action: () => alert('How nice to see you!')
            }
        },

        {
            id: 'slot 3', value: {
                title: 'slot 3',
                label: 'says goodbye',
                action: () => alert('goodbye!')
            }
        }
    ]
}


const dropDown = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                test: items.test,
                appLauncher: items.appLauncher
            }
        default:
            return state
    }
};

export default dropDown;