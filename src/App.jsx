import Container from '@mui/material/Container';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';

export default function App() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: '#EAEDED' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
