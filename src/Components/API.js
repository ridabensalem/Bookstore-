import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
const BaseURL = "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sOPMWbl48xIdH6XDvYYa/books"

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(
      BaseURL,
    );
    const books = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return books;
  }
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (bookData) => {
    await axios.post(
      BaseURL,
      bookData,
    );
    return bookData;
  }
);


export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    await axios.delete(
      `${BaseURL}/${bookId}`,
    );
    return bookId;
  }
);

