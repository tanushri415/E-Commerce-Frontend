import { useEffect, useState } from 'react';
import { productApi } from '../api';
import Header from './Header';
import Product from './Product';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';

export const Home = () => {
  const [products, setProducts] = useState([]);

  let [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchProducts = async () => {
      await productApi.getAllProducts().then((data) => setProducts(data));
    };

    const fetchProductsForCategory = async (category) => {
      await productApi
        .getProductsOfSpecificCategory(category)
        .then((data) => setProducts(data));
    };

    //if there is query string for category then call api to get products for category or all products
    if (category !== undefined && category !== null) {
      fetchProductsForCategory(category);
    } else {
      fetchProducts();
    }
  }, []);
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
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {products.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
