import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onRemoveContact } from 'redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleRemoveContact = useCallback(
    contactId => {
      dispatch(onRemoveContact(contactId));
    },
    [dispatch]
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleRemoveContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
