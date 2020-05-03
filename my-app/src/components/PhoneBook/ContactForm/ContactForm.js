import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormInput from './FormInput/FormInput';
import BtnFormSubmit from './BtnFormSubmit/BtnFormSubmit';
import config from './config.json';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = (e) => {
    const { setChanger, contacts } = this.props;
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    if (
      contacts.find(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert('That name already exissts in your phone book');
      return;
    }
    this.setState({
      name: '',
      number: '',
    });
    // this.setState({ contacts: [...this.state.contacts, contact] });
    setChanger(contact);
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInput
          handleChange={this.handleChange}
          options={config.name}
          value={this.state.name}
        />
        <FormInput
          handleChange={this.handleChange}
          options={config.number}
          value={this.state.number}
        />
        <BtnFormSubmit />
        <h2>Contacts</h2>
      </form>
    );
  }
}

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default ContactForm;
