import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(0);

  const addToCartPlus = () => {
    setItems(items + 1);
  };
  const addToCartMinus = () => {
    setItems(items - 1);
    if (items === 0) {
      setItems(0);
    }
  };
  return (
    <CartContext.Provider value={{ items, addToCartPlus, addToCartMinus }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
