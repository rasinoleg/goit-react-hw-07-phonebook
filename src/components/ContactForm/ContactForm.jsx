import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contactSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleCreateContact = e => {
    e.preventDefault();
    if (name.length === 0 || number.length === 0) {
      alert('Fields must be filled!');
      return;
    }
    const isContactExists = contacts.some(
      contact => contact.name === name || contact.number === number
    );
    if (isContactExists) {
      alert('Contact with the same name or number already exists.');
      return;
    }
    const newContact = {
      name,
      number,
    };
    dispatch(createContact(newContact));
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.TaskEditor} onSubmit={handleCreateContact}>
      <label className={styles.TaskEditor_label}>
        Name
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.TaskEditor_label}>
        Number
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.TaskEditor_button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
