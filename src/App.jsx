import Container from '@mui/material/Container';
import Header from './components/Header';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
