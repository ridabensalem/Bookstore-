import React from 'react';

const Form = () => (
  <>
    <form action="Get">
      Book Title:
      <input type="text" />
      {' '}
      <br />
      {' '}
      <br />
      Author:
      <input type="text" />
      {' '}
      <br />
      <button type="submit"> Add</button>
      {' '}
      <br />
      {' '}
      <br />
      <button type="submit">Remove</button>
    </form>
  </>
);
export default Form;
