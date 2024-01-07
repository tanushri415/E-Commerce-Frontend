import './Product.css';
import './home.css';

const Product = ({ item }) => {
  return (
    <div className='product'>
      <img className='product__image' src={item?.image} />
      <p className='product__title'>
        {item?.title.length > 30
          ? item?.title.substr(0, 30) + '...'
          : item?.title}
      </p>
      <p className='product__description'>
        {item?.description.length > 60
          ? item?.description.substr(0, 60) + '...'
          : item?.description}
      </p>
      <span>
        <span className='product__price__currency'>$</span>
        <span className='product__price'>{item?.price}</span>
      </span>
      {/* <p className='product__price'>${item?.price}</p> */}
      <button className='productButton'>Add to cart</button>
      {/*<div className='product_info'>
        <p className='product_price'>
          <small>$</small>
          <strong>{item?.price}</strong>
        </p>
        <div className='product_rating'>
          <p>🌟</p>
          <p>🌟</p>
          <p>🌟</p>
        </div>
      </div> */}

      {/* <button>Add to cart</button> */}
    </div>
  );
};

export default Product;
