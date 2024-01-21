import { Box, Button, Typography } from '@mui/material';
import Header from './Header';
import { CartContext } from '../context/cart';
import { useContext } from 'react';
import ShoppingCartItem from './ShoppingCartItem';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingCart = () => {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
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
          marginLeft: '50px',
          marginRight: '50px',
          marginBottom: '15px',
          marginTop: '100px',
        }}>
        <Typography variant='h4' align='center' gutterBottom>
          My Shopping Cart
        </Typography>
        {cartItems?.length > 0 ? (
          <>
            <Button endIcon={<DeleteIcon />} onClick={() => clearCart()}>
              Clear Cart
            </Button>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: '50px',
                  gap: '25px',
                }}>
                {cartItems?.map((cartItem) => (
                  <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </Box>
              <Typography variant='h6' align='right' sx={{ marginTop: 2 }}>
                Total:&nbsp;${getCartTotal()}
              </Typography>
            </Box>
          </>
        ) : (
          <div>nothing here</div>
        )}
      </Box>
    </Box>
  );
};

export default ShoppingCart;
