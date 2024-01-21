import { useEffect, useState } from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import Order from './Order';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/user/1')
      .then((res) => res.json())
      .then((json) => {
        setOrders(json);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        minHeight: '100vh',
      }}>
      <Header />
      <Box
        sx={{
          backgroundColor: '#EAEDED',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginLeft: '50px',
          marginRight: '50px',
          gap: '25px',
          marginBottom: '15px',
          marginTop: '100px',
        }}>
        {orders?.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Orders;
