import { useEffect, useState } from 'react';
import { getAllProducts } from '../api';
import Header from './Header';
import './Home.css';
import Product from './Product';

export const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts().then((data) => setProducts(data));
    };
    fetchProducts();
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
