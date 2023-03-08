import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/Books/BooksSclice';
import Form from './form';

const Book = ({ title, author, key }) => {
  const dispatch = useDispatch();
  return(<div>
    <h2>{title}</h2>
    <p>
      by
      {' '}
      {author}
      <button type="button" onClick={()=>dispatch(removeBook(key))}>Delete</button>
      
    </p>
  </div>)
  
};

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
          onDelete={() => dispatch(removeBook(book.id))}
        />
      ))}
      <Form onSubmit={()=>dispatch(addBook())}/>
    </div>
  );
};

export default BookList;
