import React from 'react';
import styles from './folder-list.scss';
import Folder from './folder/folder';

export default ({folders}) => {
    return (<div className="folder-list">
        {folders.map(folder => <Folder
            key={folder.id} 
            label={folder.label} 
            count={folder.count}
            isSelected={folder.isSelected}
            hasUnread={folder.hasUnread}/>
        )}
    </div>)
}