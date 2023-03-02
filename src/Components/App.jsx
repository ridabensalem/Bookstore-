import { Route, Routes } from 'react-router-dom';
import Navbar from '../routes/navBar';
import Books from './books';
import Categories from './categories';
import Header from './header';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
