import React from 'react';
import ContactList from './contact-list';
import {storiesOf} from '@storybook/react';

const contacts = [{imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', 
                   username: 'Jonathan', 
                   address: 'Jonathan01@email.com'},

                  {imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                   username: 'Abby',
                   address: 'Abby02@email.com'},

                  {imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                   username: 'Mike',
                   address: 'Mike03@otheremail.com'}];

storiesOf('ContactList', module)
                        .add('default', () => <ContactList contacts={contacts}/>)