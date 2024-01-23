import Container from '@mui/material/Container';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import { Context } from './components/contextAPI';
import Orders from './components/Orders';
import { CartProvider } from './context/cart';

export default function App() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: '#EAEDED' }}>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<ShoppingCart />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </Container>
  );
}
