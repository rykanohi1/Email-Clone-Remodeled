import React, { Component } from "react";
import ActionButton from "../action-button/action-button";
import ContactList from
  "../contact-list/contact-list";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = {
    searchTerm: "",
    isVisible: false
  };
}

filterContacts() {
  return this.props.contacts.filter(contact => {
    return contact.username
    .toLowerCase()
    .includes(this.state.searchTerm.toLowerCase());
  });
}

updateSearch(event) {
  this.setState({
    searchTerm: event.target.value
  });
}

showDropdown = event => {
  event.stopPropagation();
  this.setState(() => ({
    isVisible: true
  }));
}

hideDropdown = event => {
  event.stopPropagation();
  this.setState(() => ({
    isVisible: false
  }));
}

search = event => {
  event.stopPropagation();
  this.hideDropdown(event)
}

render() {
  return (
    <React.Fragment>
    <div className={this.state.isVisible ? "toggle-mask" : ""} onClick={this.hideDropdown}/>
      <div className="search-bar">
        <input className="search-filter" 
               type="search" 
               placeholder="search contacts" 
               value={this.state.searchTerm} 
               onChange={this.updateSearch} 
               onFocus={this.showDropdown}/>
        <ActionButton title="searchButton"
                      label="search"
                      imgSrc={this.props.imgSrc}
                      action={this.search}/>
        {this.state.isVisible && (<ContactList contacts={this.filterContacts()} getContactEmails={this.search} className='search-bar'/>)}
        </div>
    </React.Fragment>);
  }
}
