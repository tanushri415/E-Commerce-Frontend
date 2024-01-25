import { useContext } from 'react';
import { CartContext } from '../context/cart';
import { Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './ShoppingCartItem.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ShoppingCartItem = ({ cartItem }) => {
  const { addToCart, removeFromCart, removeProductFromCart } =
    useContext(CartContext);

  return (
    <Box
      sx={{
        display: 'table',
        padding: '8px 16px',
        gap: '15px',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderRadius: '9px',
        borderColor: 'white',
        alignItems: 'center',
        width: '100%',
      }}>
      <ul className='cartitem-row'>
        <li className='cartitem-row-cell cartitem-image'>
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
        </li>
        <li className='cartitem-row-cell cartitem-info'>
          <Typography variant='h6'>{cartItem?.title}</Typography>
          <Box></Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Box sx={{ display: 'flow' }}>
              <span>Price </span>
              <span>${(cartItem?.price * 1).toFixed(2)}</span>
              <br />
              <span>Total </span>
              <span>${(cartItem?.price * cartItem?.quantity).toFixed(2)}</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexWrap: 'nowrap', display: 'flex', alignItems: 'center' }}>
                <IconButton
                  sx={{
                    color: 'grey',
                    border: '1px solid',
                    backgroundColor: 'lightgrey',
                    width: '32px',
                    height: '32px',
                  }}
                  onClick={() => removeFromCart(cartItem)}>
                  <RemoveIcon fontSize='small'></RemoveIcon>
                </IconButton>
                <Typography
                  size='small'
                  variant='caption'
                  sx={{
                    fontWeight: 'bold',
                    cursor: 'none',
                    fontSize: 'large',
                    padding: '7px',
                  }}>
                  {cartItem?.quantity}
                </Typography>
                <IconButton
                  sx={{
                    color: 'grey',
                    border: '1px solid',
                    backgroundColor: 'lightgrey',
                    width: '32px',
                    height: '32px',
                  }}
                  onClick={() => addToCart(cartItem)}>
                  <AddIcon fontSize='small' color='black'></AddIcon>
                </IconButton>
              </Box>
              <IconButton
                sx={{ justifyContent: 'flex-end' }}
                onClick={() => removeProductFromCart(cartItem)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        </li>
      </ul>
      <Box sx={{ flexGrow: 1 }}>
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
          }}></Box>
      </Box>
    </Box>
  );
};
export default ShoppingCartItem;
