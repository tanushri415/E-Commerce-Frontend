import { useEffect, useState } from 'react';
import { productApi } from '../api';
import Product from './Product';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ProductFilter from './ProductFilter';
import Header from './Header';

const defaultFilterState = {
  price: { minPrice: null, maxPrice: null },
  rating: null,
};
export const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [filter, setFilter] = useState(defaultFilterState);

  let [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchProducts = async () => {
      await productApi.getAllProducts().then((data) => {
        var max = Math.max(...data.map((product) => product.price), 100);
        var min = Math.min(...data.map((product) => product.price), 0);
        //find minimum price
        setMaxPrice(max);
        //find maximum price
        setMinPrice(min);

        setFilteredProducts(data);
        setProducts(data);
      });
    };

    const fetchProductsForCategory = async (category) => {
      await productApi.getProductsOfSpecificCategory(category).then((data) => {
        var max = Math.max(...data.map((product) => product.price), 100);
        var min = Math.min(...data.map((product) => product.price), 0);
        //find minimum price
        setMaxPrice(max);
        //find maximum price
        setMinPrice(min);
        setFilteredProducts(data);
        setProducts(data);
      });
    };

    //if there is query string for category then call api to get products for category or all products
    if (category !== undefined && category !== null) {
      fetchProductsForCategory(category);
    } else {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    if (filter !== null && filter !== defaultFilterState) {
      var filteredProds = products;
      if (filter.price !== null) {
        if (filter.price.minPrice !== null) {
          filteredProds = filteredProds.filter(
            (product) => product.price >= filter.price.minPrice
          );
        }
        if (filter.price.maxPrice !== null) {
          filteredProds = filteredProds.filter(
            (product) => product.price <= filter.price.maxPrice
          );
        }
      }
      if (filter.rating !== null) {
        filteredProds = filteredProds.filter(
          (product) => product.rating.rate >= filter.rating
        );
      }
      setFilteredProducts(filteredProds);
    }
  }, [filter]);

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
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          gap: '0px',
        }}>
        {products?.length > 0 && (
          <ProductFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            setFilter={setFilter}
          />
        )}
        <Box
          sx={{
            backgroundColor: '#EAEDED',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginLeft: '50px',
          }}>
          {filteredProducts?.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
