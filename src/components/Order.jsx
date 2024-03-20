import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { productApi } from '../api';

const Order = ({ order }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    Promise.all(order.products.map((productInCart) => productApi.getProductByid(productInCart.productId)))
      .then((products) => {
        var cartVar = { ...order };
        cartVar.products = [];
        order?.products?.map((productInCart, productIndex) => {
          var productFound = products.filter((product) => product.id === productInCart.productId)[0];
          cartVar.products[productIndex] = {
            ...order.products[productIndex],
            ...productFound,
          };
        });
        setCart(cartVar);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontWeight: 'bold' }}>
        Order Placed -{' '}
        {new Date(cart?.date).toLocaleDateString(undefined, {
          dateStyle: 'long',
        })}{' '}
        -{' $'}
        {cart?.products.reduce((total, item) => total + item.price * item.quantity, 0)}
      </AccordionSummary>
      <AccordionDetails>
        {cart?.products?.map((product) => (
          <Box key={product.id} sx={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
            <a href={`/product/${product?.id}`}>
              <Box
                component='img'
                src={product?.image}
                sx={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '90px',
                  height: '90px',
                  display: 'inherit',
                }}></Box>
            </a>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}>
              <Typography variant='h6'>{product?.title}</Typography>
              <Typography variant='body2'>{product?.description}</Typography>
              <Typography variant='caption'>Quantity: {product?.quantity}</Typography>
              <Typography variant='caption'>Price: ${product?.price}</Typography>
            </Box>
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Order;
