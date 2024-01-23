import { useContext } from 'react';
import './Product.css';
import { CartContext } from '../context/cart';
import { useNavigate } from 'react-router-dom';

const Product = ({ item, detailMode = false }) => {
  const { addToCart } = useContext(CartContext);
  let navigate = useNavigate();
  return (
    <div className={`product ${detailMode ? 'detailed' : ''}`}>
      <a href={`/product/${item?.id}`}>
        <img className='product__image' src={item?.image} />
      </a>
      {detailMode === true ? (
        <>
          <p className='product__title'>{item?.title}</p>
          <p className='product__description'>{item?.description}</p>
        </>
      ) : (
        <p className='product__title'>
          {item?.title.length > 30
            ? item?.title.substr(0, 30) + '...'
            : item?.title}
        </p>
      )}

      <span>
        <span className='product__price__currency'>$</span>
        <span className='product__price'>{item?.price}</span>
      </span>
      <button
        className='productButton'
        onClick={() => {
          addToCart(item);
        }}>
        Add to cart
      </button>
      {detailMode === true && (
        <button
          className='productButton'
          onClick={() => {
            navigate(-1);
          }}>
          Back to products
        </button>
      )}

      {/*
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
       */}
    </div>
  );
};

export default Product;
