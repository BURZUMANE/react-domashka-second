import React from 'react';
import PropTypes from 'prop-types';

function ContactListItem({ contact, deleteContact }) {
  function click(e) {
    deleteContact(e.target.dataset.id);
  }
  return (
    <li key={contact.id}>
      {contact.name}:{contact.number}
      <button type="button" onClick={click} data-id={contact.id}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
