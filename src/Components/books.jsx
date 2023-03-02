import React from 'react';
import Form from './form';

const Book = ({ title, author }) => (
  <div>
    <h2>{title}</h2>
    <p>
      by
      {author}
    </p>
  </div>
);

const BookList = () => {
  const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];
  const booksWithIds = books.map((book, index) => ({
    ...book,
    id: index,
  }));
  return (
    <div>
      {booksWithIds.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>

  );
};

export default BookList;
