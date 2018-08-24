import {GET_ITEMS} from './drop-down.actions';

const defaultState = {test: [], menuOptions: []};
                      
const items = {
    test: [
        {
            id: '1', value: {
                title: '1',
                label: 'says No action yet',
                action: () => alert('No action yet')
            }
        },

        {
            id: '2', value: {
                title: '2',
                label: 'conversation continues',
                action: () => alert('No action yet')
            }
        },

        {
            id: '3', value: {
                title: '3',
                label: 'says goodbye',
                action: () => alert('No action yet')
            }
        }
    ],

    menuOptions: [
        {
            id: '1', value: {
                title: 'Mail',
                imgSrc: require('images/mail.png'),
                action: () => alert('No action yet')
            }
        },

        {
            id: '2', value: {
                title: 'Contacts',
                imgSrc: require('images/LogoMakr_1oMm9Q.png'),
                action: () => alert('No action yet')
            }
        },

        {
            id: '3', value: {
                title: 'Calendar',
                imgSrc: require('images/calendar.png'),
                action: () => alert('No action yet')
            }
        },

        {
            id: '4', value: {
                title: 'Photos',
                imgSrc: require('images/pictures.png'),
                action: () => alert('No action yet')
            }
        },

        {
            id: '5', value: {
                title: 'Shopping',
                imgSrc: require('images/shopping.png'),
                action: () => alert('No action yet')
            }
        },

        {
            id: '6', value: {
                title: 'To Do',
                imgSrc: require('images/checklist.png'),
                action: () => alert('No action yet')
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
                menuOptions: items.menuOptions
            }
        default:
            return state
    }
};

export default dropDown;