import React from "react";
import ContactListItem from "./ContactListItem/ContactListItem";

export default function ContactList({ contacts}) {
  return (
    <ul>
      {contacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
