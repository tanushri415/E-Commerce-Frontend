import { useState } from 'react';
import { Box } from '@mui/system';
import Header from './Header';
const Checkout = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.prevent.default();
    setSuccessMessage('Order Placed Successfully!');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        minHeight: '100vh',
      }}>
      <Header />
      <Box sx={{ marginTop: '100px' }}>
        <h3>Checkout Summary</h3>
        <form>
          <Box>
            <h4>Personal Information</h4>

            <label>
              Full Name: <input type='text'></input>
            </label>
            <label>
              Phone: <input type='number'></input>
            </label>
            <label>
              Card details:<input></input>
            </label>
          </Box>
          <Box>
            <h4>Shipping Address</h4>
            <label>
              Street Address:
              <input type='text'></input>
            </label>
            <label>
              City:
              <input type='text'></input>
            </label>
            <label>
              State:
              <input type='text'></input>
            </label>
            <label>
              Pincode:
              <input type='text'></input>
            </label>
          </Box>
          <button type='submit' onClick={() => handleSubmit}>
            Place Order
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default Checkout;
