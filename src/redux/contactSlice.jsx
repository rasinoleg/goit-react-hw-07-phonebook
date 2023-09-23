
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650c0b6a47af3fd22f66e963.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'tasks/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createContact = createAsyncThunk(
  'tasks/createContact',
  async (newContactData, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', newContactData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'tasks/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/tasks/${contactId}`);
      return contactId; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const contactsSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    onAddContact: (state, action) => {
      state.items.push(action.payload);
    },
    onRemoveContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
    onFilterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { onAddContact, onRemoveContact, onFilterContacts } = contactsSlice.actions;
export default contactsSlice.reducer;





// import { createSlice } from '@reduxjs/toolkit';


// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: { items:[
//           { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//           { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//           { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//           { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//           isLoading: false,
//           error: null
//         },
//     filter: '',
//   },
//   reducers: {
//     onAddContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },
//     onRemoveContact: (state, action) => {
//   const indexToRemove = state.contacts.findIndex(
//     contact => contact.id === action.payload
//   );

//   if (indexToRemove !== -1) {
//     state.contacts.splice(indexToRemove, 1);
//   }
// },
//     onFilterContacts: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { onAddContact, onRemoveContact, onFilterContacts } =
//   contactSlice.actions;
// export default contactSlice.reducer;


