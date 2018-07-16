import React from 'react';
import LeftRightLayout from '../layout/left-right-layout/left-right-layout';
import ActionButton from '../action-button/action-button';
import './contact-list.scss';

export default ({className,contacts}) => {
return (
  <div className={`contact-list ${className}`}>
    {contacts.map((contact, index) => (
      <LeftRightLayout
        className="contact"
        key={index}
        children={() => 
          <div>
          <ActionButton
            className="contact-profile"
            imgSrc={contact.imgSrc}
            title={contact.address}
            label={contact.username}
            action={() => alert("history unavailable")}
          />
          <ActionButton
            className="contact-viewer"
            imgSrc="https://png.icons8.com/metro/1600/contacts.png"
            action={() => alert("profile unavailable")}
          />
          </div>
        }
      />
    ))}
  </div>
)}