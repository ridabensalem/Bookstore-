import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './API';
// initial values 
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
      <span className="form-title">ADD A new Book </span>
      <div className="form-input">
        <input className="form_book" id="book_title" type="text" name="title" placeholder="book" onChange={handleChange} required />
        <input className="form_author" id="book_author" type="text" name="author" placeholder="Author" onChange={handleChange} required />
        <button type="button" className="form-btn-submit">
          {' '}
          <a onClick={handleSubmit}> ADD BOOK</a>
        </button>
      </div>

    </form>

  );
}

export default Form;
