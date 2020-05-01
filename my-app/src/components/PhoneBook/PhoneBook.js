import React, { Component } from "react";
import FormInput from "./ContactForm/FormInput/FormInput";
import BtnFormSubmit from "./ContactForm/BtnFormSubmit/BtnFormSubmit";
import ContactList from "./ContactList/ContactList";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import config from "./ContactForm/config.json"

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input{
      width:270px;
  }
  button{
      width:270px
  }
`;

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter:"",
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

export default PhoneBook;
