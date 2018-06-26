import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getFolders} from 'containers/folder-list/folder-list.actions';
import FolderList from 'containers/folder-list/folder-list';
import './App.css';

export class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <FolderList folders={this.props.folders}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    folders: state.folderList.folders
})

const mapDispatchToProps = dispatch => ({
    getFolders: id => dispatch(getFolders(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
