import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookList from './Components/books';
import Categories from './Components/categories';
import Header from './Components/header';

function App() {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
