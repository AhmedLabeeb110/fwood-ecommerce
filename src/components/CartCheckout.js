import { useContext } from "react";
import CartContext from "../Context/CartContext";


const CartCheckout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>{cart}</h1>
    </div>
  );
};

export default CartCheckout;
