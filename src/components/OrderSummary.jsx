import { Button, Card, Typography } from '@mui/material';
import { CartContext } from '../context/cart';
import { useContext } from 'react';

const OrderSummary = ({ showChkoutBtn = true }) => {
  const { getCartTotal } = useContext(CartContext);
  return (
    <Card
      variant='outlined'
      align='right'
      sx={{
        minWidth: 275,
        padding: 3,
        border: 0,
        borderRadius: '9px',
        borderColor: `rgb(221,221,221)`,
      }}>
      <Typography variant='h6' sx={{ marginTop: 'none', fontWeight: 'bold' }}>
        Order Summary
      </Typography>
      <Typography> Total:&nbsp;${getCartTotal()}</Typography>
      {showChkoutBtn === true && (
        <Button
          color='gold'
          width='30px'
          variant='contained'
          size='medium'
          href='/checkout'
          sx={{
            fontWeight: 'bold',
            textWrap: 'nowrap',
            marginTop: '25px',
            width: '100%',
          }}>
          Continue to Checkout
        </Button>
      )}
    </Card>
  );
};

export default OrderSummary;
