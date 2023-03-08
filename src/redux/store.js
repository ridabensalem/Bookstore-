import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './Books/BooksSclice';
import {setStatus} from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    categories: setStatus.reducer,
  },
});
export default store;
