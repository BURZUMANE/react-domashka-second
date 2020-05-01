import React from "react";

export default function ContactListItem({ contact }) {  
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
    </li>
  );
}
