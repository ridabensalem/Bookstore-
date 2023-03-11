import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from './API';
import Form from './form';
import style from '../styles/graphic.module.css';

function Book({
  title, category, author, id,
}) {
  const dispatch = useDispatch();
  return (

    <div className="book-panel">
      <div className="side_content">
        <h3>Current Chapter</h3>
        <p>Chapter 17</p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
      <div className="circle-container">
        <div className={style.circle}>
          <div className={style.progress} />
        </div>
        <div className="content">
          64%
          {' '}
          <br />
          <span className="subtitle">completed</span>
        </div>
      </div>
      <div className="divider" />

      <span className="category-span">
        {category}
      </span>
      {' '}
      <br />
      <span className="title-span">
        {title}
      </span>
      {' '}
      <br />
      <span className="author-span">
        {author}
      </span>
      {' '}
      <br />

      <a type="submit" className="button-comment" href="#">comment</a>
      {' '}
      <div className="divider_separator" />
      <a type="submit" className="button-remove" onClick={() => dispatch(removeBook(id))}>remove </a>
      {' '}
      <div className="divider_separator_2" />
      <a type="submit" className="button-edit">Edit</a>

    </div>

  );
}

function BookList() {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
