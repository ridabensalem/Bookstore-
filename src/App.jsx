import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './routes/navBar';
import BookList from './Components/books';
import Categories from './Components/categories';
import Header from './Components/header';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </>
  );
}

export default App;
