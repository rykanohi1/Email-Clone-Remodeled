import React from 'react';
import ActionButton from '../action-button/action-button';
import './contact-list.scss';
import Logo from 'images/LogoMakr_5IoRm3.png';

export default ({className,contacts}) => {
return (
  <div className={`contact-list ${className}`}>
    {contacts.map((contact, index) => (
          <div className="contact" key={index}>
          <div className="contact-profile" onClick={() => alert("history unavailable")}>
              <img src={contact.imgSrc}/>
              <div className="user-info">
                  <span className="username">{contact.username}</span>
                  <span className="user-address">{contact.address}</span>
              </div>
          </div>
          <ActionButton
            className="contact-viewer"
            imgSrc={Logo}
            action={() => alert("profile unavailable")}
          />
          </div>
    ))}
  </div>
)}