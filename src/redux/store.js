import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Categories/categoriesSlice';
import booksReducer from './Books/BooksSclice';

const store = configureStore({
  reducer: {
    categoriesReducer,
    booksReducer,
  },
});

export default store;
