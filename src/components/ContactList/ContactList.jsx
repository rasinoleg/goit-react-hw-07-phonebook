import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchTasks } from 'redux/contactsOperation';


const ContactList = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(fetchTasks());
  }, [] ) 

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = useCallback(
    contactId => {
      dispatch(deleteContact(contactId));
    },
    [dispatch]
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
