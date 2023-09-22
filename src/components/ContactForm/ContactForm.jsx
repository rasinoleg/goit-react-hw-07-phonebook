import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsOperation'; 
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

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

  const handleAddContact = e => {
    e.preventDefault();
    if (name.length === 0 || number.length === 0) {
      alert('Fields must be filled!');
      return;
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };
  return (
    <form className={styles.TaskEditor} onSubmit={handleAddContact}>
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






// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { onAddContact } from 'redux/contactSlice';
// import { v4 as uuidv4 } from 'uuid';


// import styles from './ContactForm.module.css';

// const ContactForm = () => {
//   const dispatch = useDispatch();
//    // eslint-disable-next-line no-unused-vars
//   const contacts = useSelector(state => state.contacts);

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'number') {
//       setNumber(value);
//     }
//   };

//   const handleAddContact = e => {
//     e.preventDefault();
//     if (name.length === 0 || number.length === 0) {
//       alert('Fields must be filled!');
//       return;
//     }
//     const id = uuidv4(); 
//   dispatch(onAddContact({ id, name, number })); 
  

//     setName('');
//     setNumber('');
//   };

//   return (
//     <form className={styles.TaskEditor} onSubmit={handleAddContact}>
//       <label className={styles.TaskEditor_label}>
//         Name
//         <input
//           className={styles.TaskEditor_input}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <label className={styles.TaskEditor_label}>
//         Number
//         <input
//           className={styles.TaskEditor_input}
//           type="text"
//           name="number"
//           value={number}
//           onChange={handleChange}
//         />
//       </label>
//       <button className={styles.TaskEditor_button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
