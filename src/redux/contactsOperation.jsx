import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://650c0b6a47af3fd22f66e963.mockapi.io/";
export const fetchTasks = createAsyncThunk(
  "contacts/fetchContacts", 
  async (_, thunkAPI) => {
  try {
    const response = await axios.get("/tasks");
  return response.data;
} catch (e) {
  return thunkAPI.rejectWithValue(e.massage);
}
  }
);
export const createContact = createAsyncThunk(
  'contacts/onAddContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/contacts', contactData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/onRemoveContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/contacts/${contactId}`);
      return contactId; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const { fetchTasks, createContact, deleteContact};