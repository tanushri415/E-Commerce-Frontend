import { useEffect, useState } from 'react';
import { getAllProducts, getProductsOfSpecificCategory } from '../api';
import Header from './Header';
import './Home.css';
import Product from './Product';
import { useSearchParams } from 'react-router-dom';

export const Home = () => {
  const [products, setProducts] = useState([]);

  let [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts().then((data) => setProducts(data));
    };

    const fetchProductsForCategory = async (category) => {
      await getProductsOfSpecificCategory(category).then((data) =>
        setProducts(data)
      );
    };

    //if there is query string for category then call api to get products for category or all products
    if (category !== undefined && category !== null) {
      fetchProductsForCategory(category);
    } else {
      fetchProducts();
    }
  }, []);
  return (
    <>
      <Header />
      <div className='home'>
        <div className='productItems'>
          {products.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
