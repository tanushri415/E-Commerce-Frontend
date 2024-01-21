import { useParams } from 'react-router-dom';
import Header from './Header';
import { useEffect, useState } from 'react';
import Product from './Product';
import { productApi } from '../api';
import { Box } from '@mui/material';
import './Product.css';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  let { productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      setProduct(await productApi.getProductByid(productId));
    }
    if (productId !== null && productId !== undefined) getProduct();
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
          marginTop: '100px',
        }}>
        <Product detailMode={true} key={product?.id} item={product} />
        {/* <button className='backToProducts'>Back to Products</button> */}
      </Box>
    </Box>
  );
};

export default ProductDetails;
