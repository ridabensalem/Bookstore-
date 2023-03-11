import React from 'react';
import { Link } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';

function Header() {
  return (
    <div className="Bookstore-CMS">
      <nav>

        <span className="Bookstore-CMS Text-Style-9">
          <Link to="/">Bookstore CMS </Link>
        </span>
        <span className="books">
          <Link to="/">BOOKS</Link>
        </span>
        <span className="categories">
          <Link to="/categories"> CATEGORIES</Link>
        </span>
        <div className="icon_profile">
          <GoPerson className="icon" />
          {' '}
        </div>
      </nav>

    </div>

  );
}
export default Header;
