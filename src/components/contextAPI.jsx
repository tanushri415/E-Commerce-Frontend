import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const CartContext = createContext();
export const Context = (props) => {
  const [cart, setCart] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const localCart = localStorage.getItem('cart');

  useEffect(() => {
    if (localCart) {
      setCart(JSON.parse(localCart));
    } else  {
      fetch('https://fakestoreapi.com/carts/user/2')
        .then((res) => res.json())
        .then((json) => {
          console.log(json[0].products);
          setUserCart(json[0].products);
        });
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async (productid) => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${productid}`
        );
        const json = await res.json();
        return json;
      } catch (error) {
        console.log(error);
      }
    };
    if (userCart.length > 0) {
      Promise.all(userCart.map((item) => fetchProduct(item.productId)))
        .then((res) => {
          console.log('res', res);
          setCart(res);
          localStorage.setItem('cart', JSON.stringify(res));
        })
        .catch((err) => console.error(err));
    }
  }, [userCart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
// put a use effect in this pulling the products from local storage
