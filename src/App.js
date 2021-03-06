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
import Profile from 'components/profile/profile';
import 'styles/css/App.css';
import 'styles/css/components/action-button/action-button.css';
import 'styles/css/components/contact-list/contact-list.css';
import 'styles/css/components/drop-down/drop-down.css';
import 'styles/css/containers/folder-list/folder/folder.css';
import 'styles/css/containers/folder-list/folder/folder-count/folder-count.css';
import 'styles/css/components/layout/left-right-layout/left-right-layout.css';
import 'styles/css/components/search-bar/search-bar.css';
import 'styles/css/components/profile/profile.css';

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
        return <div>
            <div className="navigation-bar">
              <DropDown className="appMenu" imgSrc="https://apkvision.com/wp-content/uploads/2017/09/13633.jpg" title="Open the app launcher to access Office 365 apps" items={this.props.menuOptions} />
              <SearchBar contacts={this.props.contacts} imgSrc="https://www.clker.com/cliparts/7/C/B/Q/6/n/search-icon-hi.png" />
              <ActionButton className="home-page" label="Mail Client" action={() => (window.location.href = "https://redux.js.org/")} />
              <div className="nav-section">
                <Profile imgSrc="blank"/>
               {/* <DropDown className="nav-bar" imgSrc={require("images/options-white.png")}/>
                <DropDown className="nav-bar" imgSrc={require("images/notifications.png")}/>
                <DropDown className="nav-bar" imgSrc={require("images/help.png")}/>
                <DropDown className="profile" imgSrc={"http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"} />*/}
              </div>
            </div>
            <ContactList contacts={this.props.contacts} className="standard" />
          </div>;
    }
}

const mapStateToProps = state => ({
    folders: state.folderList.folders,
    action: state.actionButton.action,
    contacts: state.contactList.contacts,
    test: state.dropDown.test,
    menuOptions: state.dropDown.menuOptions
})

const mapDispatchToProps = dispatch => ({
    getFolders: id => dispatch(getFolders(id)),
    getActions: id => dispatch(getActions(id)),
    getContacts: id => dispatch(getContacts(id)),
    getItems: id => dispatch(getItems(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
