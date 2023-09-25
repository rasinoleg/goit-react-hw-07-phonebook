import { createSlice } from '@reduxjs/toolkit';
export const onFilterContacts = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = onFilterContacts.actions;

export default onFilterContacts.reducer;
