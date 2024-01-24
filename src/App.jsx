import Container from '@mui/material/Container';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Orders from './components/Orders';
import { CartProvider } from './context/cart';
import Checkout from './components/Checkout';

export default function App() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: '#EAEDED', minHeight: '100vh' }}>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<ShoppingCart />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </Container>
  );
}
