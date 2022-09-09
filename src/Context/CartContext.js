import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState(0);

    const addToCartPlus = () => {
         setItems(
            items + 1
         )  
    }
  return (
    <CartContext.Provider value={{ items, addToCartPlus }}>{children}</CartContext.Provider>
  );
}

export default CartContext;
