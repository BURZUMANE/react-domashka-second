import React from "react";
// import Input from '../ContactForm/FormInput/FormInput'
import ContactList from '../ContactList/ContactList'

export default function Filter({ contacts, filter, filterFunc, deleteContact}) {
  const newContacts = [...contacts].filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>  
        <input onChange={filterFunc}></input>
        <ContactList contacts={newContacts} deleteContact={deleteContact}/>
    </>
  );
}
