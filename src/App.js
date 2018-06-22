import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getFolders} from './folder-list/folder-list.actions';
import FolderList from './folder-list/folder-list';
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
    folders: state.folders
})

const mapDispatchToProps = dispatch => ({
    getFolders: id => dispatch(getFolders(id))
})
  ​