
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from 'redux/contactSlice';
import filterReducer from 'redux/filterSlice'

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

