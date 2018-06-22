import React from 'react';
import FolderCount from './folder-count/folder-count';
import LeftRightLayout from '../../components/layout/left-right-layout/left-right-layout';

export default ({label, count, hasUnread, isSelected}) => (
  <LeftRightLayout
    className={`folder ${isSelected ? 'selected' : ''}`}
    children={() => [
      <span key={1} className="folder-title"> {label} </span>,
      <FolderCount key={2} hasUnread={hasUnread} count={count}/>
    ]}
  />
)