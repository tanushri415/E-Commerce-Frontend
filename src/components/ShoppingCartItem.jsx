import { useContext, useState } from 'react';
import { CartContext } from '../context/cart';
import { Typography, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const ShoppingCartItem = ({ cartItem }) => {
  const { addToCart, removeFromCart, removeProductFromCart } =
    useContext(CartContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderRadius: '9px',
        borderColor: 'white',
        alignItems: 'center',
      }}>
      <a href={`/product/${cartItem?.id}`}>
        <Box
          component='img'
          src={cartItem?.image}
          sx={{
            margin: '12px',
            width: '180px',
            height: '180px',
          }}></Box>
      </a>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant='h6'>{cartItem?.title}</Typography>
        {/* <Typography variant='body2'>{cartItem?.description}</Typography> */}
      </Box>
      <Box
        sx={{
          gap: '5px',
          display: 'flex',
          justifyItems: 'flex-end',
          alignItems: 'center',
          minWidth: '25%',
        }}>
        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            size='small'
            sx={{ width: '10px', fontSize: 'large' }}
            variant='contained'
            onClick={() => removeFromCart(cartItem)}>
            -
          </Button>
          <Button
            size='small'
            variant='text'
            sx={{ fontWeight: 'bold', cursor: 'none', fontSize: 'large' }}>
            {cartItem?.quantity}
          </Button>
          <Button
            size='small'
            variant='contained'
            sx={{ width: '10px', fontSize: 'large' }}
            onClick={() => addToCart(cartItem)}>
            +
          </Button>
        </Box>
        <Typography variant='caption'>Price ${cartItem?.price}</Typography>
        <Typography variant='caption'>
          Total:&nbsp;${(cartItem?.price * cartItem?.quantity).toFixed(2)}
        </Typography>
        <IconButton
          sx={{ justifyContent: 'flex-end' }}
          onClick={() => removeProductFromCart(cartItem)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default ShoppingCartItem;
