import React from 'react';

const Books = () => (
  <>
    <h2>Hello Books</h2>
    <li>The new Horizon By david Norson</li>
    <li>The lands of Arcanum By rida Bensalem</li>
    <li> The pain By Ahmed sefroui</li>
    <li>The last day by Victor Hugo</li>
    <br />
    <form action="post ">
      Book Name :
      {' '}
      <input type="text" />
      {' '}
      <br />
      {' '}
      <br />
      Book Author :
      {' '}
      <input type="text" />
      {' '}
      <br />
      {' '}
      <br />
      <button type="submit"> add a book</button>
      {' '}
      <br />
    </form>
  </>
);
export default Books;
