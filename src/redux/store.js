
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

