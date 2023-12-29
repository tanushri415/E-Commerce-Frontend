import Container from '@mui/material/Container';
import Header from './components/Header';

export default function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
    </Container>
  );
}
