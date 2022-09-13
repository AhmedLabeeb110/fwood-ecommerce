import { useContext } from "react";
import CartContext from "../Context/CartContext";


const CartCheckout = () => {
  const { cart } = useContext(CartContext);
console.log(cart);
  return (
    <div>
      <h1><span> {cart && cart.product.name}</span> <span> price:{cart && cart.product.price}</span> <span> qty: {cart && cart.qty}</span></h1>
    </div>
  );
};

export default CartCheckout;
