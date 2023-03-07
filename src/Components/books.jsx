import React from 'react';
import { useSelector } from 'react-redux';
import Form from './form';

const Book = ({ title, author, onDelete }) => (
  <div>
    <h2>{title}</h2>
    <p>
      by
      {' '}
      {author}
      <button type="submit" onClick={onDelete}>Delete</button>
    </p>
  </div>
);

const BookList = () => {
  const books = useSelector((state) => state.books);

  const handleDelete = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
  };

  const booksWithIds = books.map((book, index) => ({
    ...book,
    id: index,
  }));

  return (
    <div>
      {booksWithIds.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          onDelete={() => handleDelete(book.id)}
        />
      ))}
      <Form />
    </div>
  );
};

export default BookList;
