import React, { Component } from 'react'

class ContactForm extends Component {
    state = {
      name: "",
      number: "",
    };
    handleSubmit = (e) => {
      e.preventDefault();
      const contact = {
        id: uuidv4(),
        name: this.state.name,
        number: this.state.number
      };
      this.setState({ 
          name: "",
          number: "",
   });
      this.setState({ contacts: [...this.state.contacts, contact] });
      console.log("this.state", this.state);
    };
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    render() {
      return (
        <StyledWrapper>
          <h1>Phonebook</h1>
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
            <ContactList contacts={this.state.contacts}></ContactList>
        </StyledWrapper>
      );
    }
  }
  
  export default ContactForm;
  