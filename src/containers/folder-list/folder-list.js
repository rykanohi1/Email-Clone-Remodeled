import React from 'react';
import Folder from 'containers/folder-list/folder/folder';
import './folder-list.scss';

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