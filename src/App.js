import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Products/Product';
import Home from './Pages/Home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';
import Search from './Pages/Search/Search';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
     

    </div>
  );
}

export default App;
