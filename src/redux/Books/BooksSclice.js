import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    list: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
    removeBook: (state, action) => {
      state.list = state.list.filter((book) => book.id !== action.payload.id);
    },
  },
});
export default booksSlice;
