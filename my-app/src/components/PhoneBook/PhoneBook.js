import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './StyledWrapper';
import ContactForm from './ContactForm/ContactForm';
// import ContactList from "./ContactList/ContactList";
import Filter from './Filter/Filter';

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  setChanger = (item) => {
    // this.setState({ contacts: [...this.state.contacts, item] });
    this.setState((prev) => ({ contacts: [...prev.contacts, item] }));
  };

  filterFunc = (e) => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    return (
      <StyledWrapper>
        <h1>Phonebook</h1>
        <ContactForm
          setChanger={this.setChanger}
          contacts={this.state.contacts}
        />
        <Filter
          contacts={this.state.contacts}
          filter={this.state.filter}
          filterFunc={this.filterFunc}
          deleteContact={this.deleteContact}
        />
        {/* <ContactList contacts={this.state.contacts} /> */}
      </StyledWrapper>
    );
  }
}

ContactForm.propTypes = {
  setChanger: PropTypes.func.isRequired,
  deleteContact: PropTypes.func,
  contacts: PropTypes.array.isRequired,
};

export default PhoneBook;
