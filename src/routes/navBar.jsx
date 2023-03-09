import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <navBar>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </navBar>
  );
}
export default Navbar;
