import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, addBook, removeBook } from '../../Components/API';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;
