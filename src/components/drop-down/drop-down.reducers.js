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
                title: 'This guy',
                imgSrc: 'https://image.flaticon.com/icons/svg/74/74472.svg',
                action: () => alert('No action yet')
            }
        },

        {
            id: '2', value: {
                title: 'Options',
                imgSrc: 'https://image.flaticon.com/icons/svg/60/60473.svg',
                action: () => alert('No action yet')
            }
        },

        {
            id: '3', value: {
                title: 'Gotta have some mail in here',
                imgSrc: 'https://image.flaticon.com/icons/svg/34/34400.svg',
                action: () => alert('No action yet')
            }
        },

        {
            id: '4', value: {
                title: 'A book',
                imgSrc: 'https://image.flaticon.com/icons/svg/171/171322.svg',
                action: () => alert('No action yet')
            }
        },

        {
            id: '5', value: {
                title: 'Calendar',
                imgSrc: 'https://image.flaticon.com/icons/svg/34/34389.svg',
                action: () => alert('No action yet')
            }
        },

        {
            id: '6', value: {
                title: 'Photos',
                imgSrc: 'https://image.flaticon.com/icons/svg/3/3901.svg',
                action: () => alert('No action yet')
            }
        },

        {
            id: '7', value: {
                title: 'Buy something maybe?',
                imgSrc: 'https://image.flaticon.com/icons/svg/60/60992.svg',
                action: () => alert('No action yet')
            }
        },

        {
            id: '8', value: {
                title: 'You got stuff to do',
                imgSrc: 'https://image.flaticon.com/icons/svg/45/45802.svg',
                action: () => alert('No action yet')
            }
        },

        {
            id: '9', value: {
                title: 'Print some stuff',
                imgSrc: 'https://image.flaticon.com/icons/svg/12/12022.svg',
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