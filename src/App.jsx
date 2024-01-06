import Container from '@mui/material/Container';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
// import Home from './components/Home';
import Header from './components/Header';
// import Product from './components/Product';
//import ShoppingCart from './components/ShoppingCart';

export default function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path='/product' element={<Login />} /> */}
          {/* <Route path='/cart' element={<ShoppingCart />} /> */}
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
