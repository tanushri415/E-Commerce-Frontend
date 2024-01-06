import { Box, Container, InputLabel, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');
  const [formValues, setFormValues] = useState({
    username: {
      value: '',
      error: false,
      errorMessage: 'Username is mandatory',
    },
    password: {
      value: '',
      error: false,
      errorMessage: 'Password is mandatory',
    },
  });

  const handleFormElementChange = (e) => {
    e.preventDefault();
    setLoginError('');
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
        error: false,
      },
    });
  };
  const handleRegisterAccount = (e) => {
    e.preventDefault();
    navigate('/register');
    };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formHasError = false;
    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };

    for (let index = 0; index < formFields.length; index++) {
      const currentField = formFields[index];
      const currentValue = formValues[currentField].value;

      if (currentValue === '') {
        formHasError = true;
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField],
            error: true,
          },
        };
      }
    }

    setFormValues(newFormValues);
    console.log(newFormValues);
    if (!formHasError) {
      //call the register api hear
      const result = await loginUser(
        newFormValues.username.value,
        newFormValues.password.value
      );
      console.log(result.name);
      if (result.name) {
        //there is some error
        if (
          result.name === 'InvalidCredentialsError' ||
          result.name === 'MissingCredentialsError'
        ) {
          setLoginError(result.error);
        }
      } else {
        //success. happy path
          //TODO: Set token
             window.localStorage.setItem('token', result.token);
        navigate('/');
      }
    }
  };

  return (
    <Container
      maxWidth='xs'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px',
      }}>
      <Stack spacing={2} alignItems={'center'}>
        <Typography
          sx={{
            textIndent: '-500px',
            width: '103px',
            height: '31px',
            backgroundPositionX: '-5px',
            backgroundPositionY: '-130px',
            backgroundImage: `url("https://m.media-amazon.com/images/S/sash/mPGmT0r6IeTyIee.png")`,
            verticalAlign: 'top',
            marginTop: '5px',
            marginBottom: '10px',
          }}
        />
        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderRadius: '9px',
            borderColor: `rgb(221,221,221)`,
            paddingTop: '10px',
            paddingLeft: '24px',
            paddingBottom: '24px',
            paddingRight: '24px',
            width: '100%',
          }}>
          <Typography
            variant='h5'
            sx={{ textAlign: 'center', marginBottom: '10px' }}>
            Login to your Account
          </Typography>
          <InputLabel
            sx={{
              marginBottom: '1px',
              color: 'black',
              fontWeight: '700',
              fontSize: '13px',
            }}
            htmlFor='username'>
            User Name
          </InputLabel>
          <TextField
            id='username'
            name='username'
            required
            // label='Username'
            size='small'
            variant='outlined'
            placeholder='User Name'
            sx={{ marginBottom: '10px', fontSize: '13px' }}
            autoComplete='off'
            value={formValues.username.value}
            error={formValues.username.error}
            onChange={handleFormElementChange}
            helperText={
              formValues.username.error && formValues.username.errorMessage
            }
          />
          <InputLabel
            sx={{
              marginBottom: '1px',
              color: 'black',
              fontWeight: '700',
              fontSize: '13px',
            }}
            htmlFor='password'>
            Password
          </InputLabel>
          <TextField
            id='password'
            name='password'
            required
            size='small'
            variant='outlined'
            type='password'
            placeholder='Password'
            sx={{ marginBottom: '10px' }}
            // inputProps={{ classes: { input: { fontSize: 13 } } }}
            value={formValues.password.value}
            error={formValues.password.error}
            onChange={handleFormElementChange}
            helperText={
              formValues.password.error && formValues.password.errorMessage
            }
          />
          <Typography
            sx={{
              textAlign: 'left',
              marginBottom: '10px',
              fontSize: '10px',
              color: 'red',
            }}>
            {loginError}
          </Typography>
          <Button color='gold' variant='contained' size='medium' type='submit'>
            Login
          </Button>
        </Box>
        <Typography
          variant='h5'
          sx={{ textAlign: 'center', marginBottom: '10px' }}>
          New to Amazon?
        </Typography>
        <Button
          color='gold'
          variant='contained'
          size='large'
          onClick={handleRegisterAccount}>
          Create your Account
        </Button>
      </Stack>
    </Container>
  );
};
export default Login;
