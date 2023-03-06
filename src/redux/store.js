import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './Books/BooksSclice';
import categoriesSlice from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});
export default store;
