export const GET_CONTACTS = 'GET_CONTACTS';

export const getContacts = contactId => ({
    type: GET_CONTACTS,
    id: contactId
})