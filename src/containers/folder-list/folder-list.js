import React, {Component} from 'react';
import Folder from 'containers/folder-list/folder/folder';
import './folder-list.scss';

//export default ({folders}) => {
//    return (<div className="folder-list">
//        {folders.map(folder => <Folder
//            key={folder.id} 
//            label={folder.label} 
//            count={folder.count}
//            isSelected={folder.isSelected}
//            hasUnread={folder.hasUnread}/>
//        )}
//    </div>)
//}

export default class FolderList extends Component {
    constructor(props) {
        super(props);
        this.toggleSelected = this.toggleSelected.bind(this);
        this.state = {
           selectedItem: null
        }
    }

    toggleSelected(event) {
        const activeIndex = event.target.id;
        event.preventDefault();
        this.setState(state => ({
            selectedItem: activeIndex
        }));
    }

    render() {
        return (
            <div className="folder-list">
                {this.props.folders.map(folder => <Folder
                    id={folder.id}
                    label={folder.label}
                    count={folder.count}
                    selectedItem={this.state.selectedItem}
                    hasUnread={folder.hasUnread}
                    onClick={this.toggleSelected} />
                )}
            </div>
        )
    }
}