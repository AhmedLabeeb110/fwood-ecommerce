import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [items, setItems] = useState({product: null, qty:0});
  const [cart, setCart] = useState(null);

  const addToCartPlus = (product) => {
    setItems({product:product, qty:items.qty + 1});
  };
  const addToCartMinus = (product) => {
    setItems({product:product, qty:items.qty - 1});
    if (items.qty === 0) {
      setItems(0);
    }
  };

  const addToCart = () => {
    setCart(items);
  };
  return (
    <CartContext.Provider

      value={{ items, setItems, addToCartPlus, addToCartMinus, addToCart, cart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
