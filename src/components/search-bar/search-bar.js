import React, { Component } from "react";
import ActionButton from "../action-button/action-button";
import ContactList from "../contact-list/contact-list";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.toggleContacts = this.toggleContacts.bind(this);
    this.state = {
      searchTerm: "",
      isVisible: false
      
    };
  }

  search() {
    alert("search");
  }

  toggleContacts(event) {
    event.preventDefault();
    this.setState(() => ({
      isVisible: !this.state.isVisible
    }));
  }

  filterContacts() {
   return this.props.contacts.filter(contact => {
      return contact.username
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
  }


  updateSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
        <div
          className={this.state.isVisible && "toggle-mask"}
         
        >
          <div className="search-bar">
            <input
              className="search-filter"
              type="search"
              placeholder="search contacts"
              value={this.state.searchTerm}
              onChange={this.updateSearch}
              onFocus={this.toggleContacts}
              onBlur={this.toggleContacts}
              
            />
            <ActionButton
              title="searchButton"
              label="search"
              imgSrc={this.props.imgSrc}
              action={this.search}
            />
            {this.state.isVisible && (
              <ContactList contacts={this.filterContacts()} />
            )}
          </div>
        </div>
    );
  }
}
