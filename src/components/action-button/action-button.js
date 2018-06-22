import React from 'react';

// What do I expect from my callers
/**
 * Renders an action button
 * @param {String} imgSrc
 * @param {String} label
 * @param {String} title
 * @param {Function} action
 * @returns {XML}
 */
export default ({imgSrc, label, title, action}) => {
  if(!(imgSrc || label)) {
    throw new Error('imgSrc and label cannot both be blank');
  }
  if(!action) {
    throw new Error('must provide an action to the button');
  }
  return (
    // In the case of most attributes, If the attribute is falsy, React will not render it
    <button title={title} onClick={action} className='action-button'>
      {imgSrc && <img src={imgSrc}/>}
      {label && <span>{label}</span>}
    </button>
  );
  // What does my caller expect from me?
}
