import React from 'react';
import './action-button.scss';

export default ({imgSrc, label, title, action, className}) => {
  if(!(imgSrc || label)) {
    throw new Error('imgSrc and label cannot both be blank');
  }
  if(!action) {
    throw new Error('must provide an action to the button');
  }
  return (
    // In the case of most attributes, If the attribute is falsy, React will not render it
    <button title={title} onClick={action} className={`action-button ${className || 'default'}`}>
      {imgSrc && <img src={imgSrc}/>}
      {label && <span>{label}</span>}
    </button>
  );
}
