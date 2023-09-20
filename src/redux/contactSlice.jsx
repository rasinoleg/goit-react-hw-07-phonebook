import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [ 
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  },
  reducers: {
    onAddContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    onRemoveContact: (state, action) => {
  const indexToRemove = state.contacts.findIndex(
    contact => contact.id === action.payload
  );

  if (indexToRemove !== -1) {
    state.contacts.splice(indexToRemove, 1);
  }
},
    onFilterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { onAddContact, onRemoveContact, onFilterContacts } =
  contactSlice.actions;
export default contactSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
//   reducers: {
//     onAddContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     onRemoveContact: (state, action) => {

//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },

//     onFilterContacts: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { onAddContact, onRemoveContact, onFilterContacts } =
//   contactSlice.actions;
// export default contactSlice.reducer;
