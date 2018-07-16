import {GET_CONTACTS} from './contact-list.actions';

const defaultState = {contacts: []};
const contacts = [{imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', 
                   username: 'Jonathan', 
                   address: 'Jonathan01@email.com'},

                  {imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                   username: 'Abby',
                   address: 'Abby02@email.com'},

                  {imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                   username: 'Mike',
                   address: 'Mike03@otheremail.com'}];

const contactList = (state = defaultState, action) => {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts
            }
        default:
            return state
    }
}

export default contactList