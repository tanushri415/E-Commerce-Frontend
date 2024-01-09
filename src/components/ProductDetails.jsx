import { useParams } from 'react-router-dom';
import Header from './Header';
import { useEffect, useState } from 'react';
import Product from './Product';
import { productApi } from '../api';
import { Box } from '@mui/material';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  let { productId } = useParams();

  useEffect(() => {
    async function getBook() {
      setProduct(await productApi.getProductByid(productId));
    }
    if (productId !== null && productId !== undefined) getBook();
  }, [productId]);

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
        <Product detailMode={true} key={product?.id} item={product} />
      </Box>
    </Box>
  );
};

export default ProductDetails;
