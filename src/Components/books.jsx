import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/BooksSclice';
import Form from './form';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{title}</h2>
      <p>
        {author}
        <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>

      </p>
    </div>
  );
}

function BookList() {
  const books = useSelector((state) => state.booksReducer.books);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
