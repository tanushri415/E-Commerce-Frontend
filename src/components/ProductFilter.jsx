import { Box, Slider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Rating4Up = (
  <Typography
    sx={{
      top: '-2px',
      width: '95px',
      minWidth: '95px',
      height: '22px',
      backgroundPositionX: '-2px',
      backgroundPositionY: '-343px',
      cursor: 'pointer',
      backgroundImage: `url("https://m.media-amazon.com/images/S/sash/9DuIU8ZS5i377uD.png")`,
    }}></Typography>
);
const Rating3Up = (
  <Typography
    sx={{
      top: '-2px',
      width: '95px',
      minWidth: '95px',
      height: '22px',
      backgroundPositionX: '-293px',
      backgroundPositionY: '-439px',
      cursor: 'pointer',
      backgroundImage: `url("https://m.media-amazon.com/images/S/sash/9DuIU8ZS5i377uD.png")`,
    }}></Typography>
);
const Rating2Up = (
  <Typography
    sx={{
      top: '-2px',
      width: '95px',
      minWidth: '95px',
      height: '22px',
      backgroundPositionX: '-99px',
      backgroundPositionY: '-391px',
      cursor: 'pointer',
      backgroundImage: `url("https://m.media-amazon.com/images/S/sash/9DuIU8ZS5i377uD.png")`,
    }}></Typography>
);
const Rating1Up = (
  <Typography
    sx={{
      top: '-2px',
      width: '95px',
      minWidth: '95px',
      height: '22px',
      backgroundPositionX: '-390px',
      backgroundPositionY: '-487px',
      cursor: 'pointer',
      backgroundImage: `url("https://m.media-amazon.com/images/S/sash/9DuIU8ZS5i377uD.png")`,
    }}></Typography>
);
const ProductFilter = ({ minPrice, maxPrice, setFilter }) => {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [rating, setRating] = useState(null);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  useEffect(() => {
    var filter = { price: { minPrice: null, maxPrice: null }, rating: null };
    if (priceRange[0] !== minPrice) {
      filter.price.minPrice = priceRange[0];
    }
    if (priceRange[1] !== maxPrice) {
      filter.price.maxPrice = priceRange[1];
    }

    if (rating) {
      filter.rating = rating;
    }
    setFilter(filter);
  }, [priceRange, rating]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        marginLeft: '15px',
      }}>
      <Box>
        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
          Customer Reviews
        </Typography>
        {rating && (
          <Typography
            sx={{ ':hover': { color: '#C7511F' } }}
            variant='caption'
            onClick={() => setRating(null)}>
            Clear Rating
          </Typography>
        )}
        <Box
          sx={{ display: 'flex', flexWrap: 'nowrap' }}
          onClick={() => setRating(4)}>
          {Rating4Up}
          <Typography
            sx={{
              ...(rating === 4 && { fontWeight: 'bold' }),
            }}>
            &&nbsp;Up
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', flexWrap: 'nowrap' }}
          onClick={() => setRating(3)}>
          {Rating3Up}
          <Typography
            sx={{
              ...(rating === 3 && { fontWeight: 'bold' }),
            }}>
            &&nbsp;Up
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', flexWrap: 'nowrap' }}
          onClick={() => setRating(2)}>
          {Rating2Up}
          <Typography
            sx={{
              ...(rating === 2 && { fontWeight: 'bold' }),
            }}>
            &&nbsp;Up
          </Typography>
        </Box>
        <Box
          sx={{ display: 'flex', flexWrap: 'nowrap' }}
          onClick={() => setRating(1)}>
          {Rating1Up}
          <Typography
            sx={{
              ...(rating === 1 && { fontWeight: 'bold' }),
            }}>
            &&nbsp;Up
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>
          Price
        </Typography>
        <Slider
          getAriaLabel={() => 'Price range'}
          color='info'
          value={priceRange}
          min={minPrice}
          max={maxPrice}
          onChange={handlePriceRangeChange}
          valueLabelDisplay='auto'
        />
      </Box>
    </Box>
  );
};

export default ProductFilter;
