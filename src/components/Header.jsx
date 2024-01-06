import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './header.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  return (
    <>
      <Box sx={{ marginBottom: '10px' }}>
        <AppBar
          sx={{
            backgroundColor: '#131921',
            position: 'relative',
            gap: '15px',
          }}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{
                textIndent: '-500px',
                width: '97px',
                height: '30px',
                float: 'left',
                backgroundPositionX: '-10px',
                backgroundPositionY: '-51px',
                backgroundImage: `url("https://m.media-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB587940754_.png")`,
              }}></Typography>
            <Search sx={{ flexGrow: 1, display: 'flex' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            {/* <Box sx={{ flexGrow: 1 }} /> */}

            <Box component='a' href='/login'>
              <h4 className='headerText'>Hello,</h4>
              <h4 className='headerText'>sign in</h4>
              {/* </Link> */}
            </Box>
            <Box component='a' href='#'>
              <h4 className='headerText'>Returns</h4>
              <h4 className='headerText'>Orders</h4>
            </Box>

            <IconButton
              size='large'
              aria-label='show 4 cart items'
              color='inherit'
              href={`/cart`}>
              <Badge badgeContent={4} color='error'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            {/* </Box> */}
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#232f3e',
            color: 'white',
            justifyContent: 'space-evenly',
          }}
          className='header_bottom'>
          <p>Electronics</p>
          <p>Jewellery</p>
          <p>Men's clothing</p>
          <p>Women's Clothing</p>
          <p>Amazon Music</p>
        </Box>
      </Box>
    </>
  );
}
