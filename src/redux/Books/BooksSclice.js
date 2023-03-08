import { createSlice } from '@reduxjs/toolkit';
import list from './list';

const initialState = [
  list,
];
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
     state= list.push(action.payload);
    },
    removeBook: (state, action) => {
      state = list.filter((book) => book.item_id !== action.payload.id);
    },
  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice;
