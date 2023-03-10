import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeBook,fetchBooks  } from './API';
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
  console.log(books);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchBooks());
    },[dispatch])

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
