import React from "react";

export default function ContactListItem({ contact, deleteContact }) {  
    function click(e){
      deleteContact(e.target.dataset.id);
    }
    return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button onClick={click} data-id={contact.id}>Delete</button>
    </li>
  );
}
