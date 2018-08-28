import React, {Component} from 'react';
import ActionButton from 'components/action-button/action-button.js';
export default class Settings extends ({imgSrc}) => {
    let isHidden = true;
    function toggleMenu() {
        isHidden = !isHidden;
        return isHidden;
    }

    return (
        <div className="settings">
            <ActionButton className="blac" imgSrc={imgSrc} action={() => toggleMenu()}/>
            <div className={`menu ${isHidden ? 'hide' : 'show'}`}>
            </div>
        </div>
    )}