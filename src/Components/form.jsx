import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/Books/BooksSclice';

const initialValues = {
  title: '',
  author: '',
  category: '',
};

function Form() {
  const [state, setState] = useState(initialValues);
  const dispatch = useDispatch();
  const booksArray = useSelector((state) => state.booksReducer.books);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value, item_id: `item${booksArray.length + 1}` }));
  };
  const handleSubmit = () => {
    dispatch(addBook(state));
  };
  return (
    <form action="#" method="post" className="contact_form">
      <h1>ADD NEW BOOK</h1>
      <input className="form_item" id="book_title" type="text" name="title" placeholder="Book title" maxLength="30" onChange={handleChange} required />
      {' '}
      <br />
      {' '}
      <br />
      <input className="form_item" id="book_author" type="text" name="author" placeholder="Author" onChange={handleChange} required />
      {' '}
      <br />
      {' '}
      <br />
      <button type="button" className="form_button" onClick={handleSubmit}>ADD BOOK</button>
    </form>
  );
}

export default Form;
