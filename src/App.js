import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getFolders} from 'containers/folder-list/folder-list.actions';
import {getActions} from 'components/action-button/action-button.actions';
import {getContacts} from 'components/contact-list/contact-list.actions';
import {getItems} from 'components/drop-down/drop-down.actions';
import FolderList from 'containers/folder-list/folder-list';
import ActionButton from 'components/action-button/action-button';
import ContactList from 'components/contact-list/contact-list';
import DropDown from 'components/drop-down/drop-down';
import SearchBar from 'components/search-bar/search-bar';
import './App.css';
import 'styles/css/components/drop-down/drop-down.css';
import 'styles/css/components/contact-list/contact-list.css';
import 'styles/css/components/search-bar/search-bar.css';
import 'styles/css/containers/folder-list/folder/folder.css';
import 'styles/css/containers/folder-list/folder/folder-count/folder-count.css';

export class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.getFolders(1);
        this.props.getActions(1);
        this.props.getContacts(1);
        this.props.getItems(1);
    }

    render() {
        return (
            <div>
                <DropDown label='Open the app launcher to access Office 365 apps' items={this.props.appLauncher}/> 
                <FolderList folders={this.props.folders}/>
                <ActionButton label='Redux Documentation' action={() => window.location.href='https://redux.js.org/'}/>
                <DropDown label='drops down' items={this.props.test}/> 
                <ContactList contacts={this.props.contacts} className='standard'/>
                <SearchBar contacts={[{imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', 
                username: 'Jonathan', 
                address: 'Jonathan01@email.com'},

               {imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                username: 'Abby',
                address: 'Abby02@email.com'},

               {imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
                username: 'Mike',
                address: 'Mike03@otheremail.com'}]}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    folders: state.folderList.folders,
    action: state.actionButton.action,
    contacts: state.contactList.contacts,
    test: state.dropDown.test,
    appLauncher: state.dropDown.appLauncher
})

const mapDispatchToProps = dispatch => ({
    getFolders: id => dispatch(getFolders(id)),
    getActions: id => dispatch(getActions(id)),
    getContacts: id => dispatch(getContacts(id)),
    getItems: id => dispatch(getItems(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
