import { useState } from 'react';
import { Box } from '@mui/system';
import Header from './Header';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import OrderSummary from './OrderSummary';
import SupportedPayments from './SupportedPayments';
import MuiPhoneNumber from 'mui-phone-number';
import './Checkout.css';
const Checkout = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hurray');
    setSuccessMessage('Order Placed Successfully!');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
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
        <Typography variant='h4' sx={{ textAlign: 'center', color: 'blue' }}>
          Checkout Summary
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            component='form'
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '9px',
              borderColor: `rgb(221,221,221)`,
              gap: '15px',
              width: '50%',
            }}>
            <Card>
              <CardHeader title='Personal Information' />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '9px',
                  borderColor: `rgb(221,221,221)`,
                  marginRight: '50px',
                  marginLeft: '50px',
                }}>
                <table className='table'>
                  <tr>
                    <td width='25%'>
                      <InputLabel
                        sx={{
                          fontWeight: 'bold',
                        }}
                        htmlFor='fullname'>
                        Full Name
                      </InputLabel>
                    </td>
                    <td width='75%'>
                      <TextField
                        required
                        id='fullname'
                        size='small'
                        variant='outlined'
                        sx={{ fontSize: '13px', width: '100%' }}
                        autoComplete='off'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td width='25%'>
                      <InputLabel
                        sx={{
                          fontWeight: 'bold',
                        }}
                        htmlFor='phone'>
                        Phone
                      </InputLabel>
                    </td>
                    <td width='75%'>
                      <MuiPhoneNumber
                        defaultCountry={'us'}
                        id='phone'
                        size='small'
                        variant='outlined'
                        sx={{ fontSize: '13px', width: '100%' }}
                        // onChange={handleOnChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td width='25%'>
                      <InputLabel
                        sx={{
                          fontWeight: 'bold',
                        }}
                        htmlFor='carddetails'>
                        Card Details
                      </InputLabel>
                    </td>
                    <td width='75%'>
                      <TextField
                        required
                        id='carddetails'
                        size='small'
                        variant='outlined'
                        sx={{ fontSize: '13px', width: '100%' }}
                        autoComplete='off'
                      />
                    </td>
                  </tr>
                </table>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '10px',
                  }}></Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '10px',
                  }}></Box>
              </CardContent>
            </Card>
            <Card>
              <CardHeader title='Shipping Address' />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '9px',
                  borderColor: `rgb(221,221,221)`,
                  marginRight: '50px',
                  marginLeft: '50px',
                }}>
                <table className='table'>
                  <tr>
                    <td width='25%'>
                      <InputLabel
                        sx={{
                          fontWeight: 'bold',
                        }}
                        htmlFor='streetaddress'>
                        Street Address
                      </InputLabel>
                    </td>
                    <td width='75%'>
                      <TextField
                        required
                        id='streetaddress'
                        size='small'
                        variant='outlined'
                        sx={{ fontSize: '13px', width: '100%' }}
                        autoComplete='off'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td width='25%'>
                      <InputLabel
                        sx={{
                          fontWeight: 'bold',
                        }}
                        htmlFor='city'>
                        City
                      </InputLabel>
                    </td>
                    <td width='75%'>
                      <TextField
                        required
                        id='city'
                        size='small'
                        variant='outlined'
                        sx={{ fontSize: '13px', width: '100%' }}
                        autoComplete='off'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td width='25%'>
                      <InputLabel
                        sx={{
                          fontWeight: 'bold',
                        }}
                        htmlFor='state'>
                        State
                      </InputLabel>
                    </td>
                    <td width='75%'>
                      <TextField
                        required
                        id='state'
                        size='small'
                        variant='outlined'
                        sx={{ fontSize: '13px', width: '100%' }}
                        autoComplete='off'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td width='25%'>
                      <InputLabel
                        sx={{
                          fontWeight: 'bold',
                        }}
                        htmlFor='pincode'>
                        Pincode
                      </InputLabel>
                    </td>
                    <td width='75%'>
                      <TextField
                        required
                        id='pincode'
                        size='small'
                        variant='outlined'
                        sx={{ fontSize: '13px', width: '100%' }}
                        autoComplete='off'
                      />
                    </td>
                  </tr>
                </table>
              </CardContent>
            </Card>
            <Button
              color='gold'
              variant='contained'
              size='medium'
              type='submit'>
              Place Order
            </Button>
            <Typography color='green'>{successMessage}</Typography>
          </Box>
          <Stack sx={{ gap: '15px', width: '33.34%', maxWidth: '450px' }}>
            <OrderSummary showChkoutBtn={false} />
            <SupportedPayments />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
