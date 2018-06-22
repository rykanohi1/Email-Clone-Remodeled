import React from 'react';
import './folder-count.scss';

export default ({hasUnread, count}) => 
    <span className={`folder-count ${hasUnread ? 'has-unread' : ''}`} >{count}</span>
