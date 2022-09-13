import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const url =
    "https://my-json-server.typicode.com/AhmedLabeeb110/fwood-ecommerce-db/allproducts/" + id;
  const { data: product } = useFetch(url);

  const {items, addToCartPlus, addToCartMinus, addToCart } = useContext(CartContext)

  return (
    <div className="main-Container">
      {product && (
        <div className="product">
          <div className="product-Image">
            <img src={product.image} alt="images" />
          </div>
          <div className="product-Details">
            <span className="selling-Status">{product.sellingStatus}</span>
            <p className="product-Stock">
              {product.stock ? "in stock" : "out of stock"}
            </p>
            <h3 className="product-Name">{product.name}</h3>
            <h3 className="product-Price">{product.price}</h3>
            <p className="product-Description">{product.description}</p>
            <AiFillPlusCircle onClick={() => addToCartPlus()} />
            <span>{items}</span>
            <AiFillMinusCircle onClick={() => addToCartMinus()}/>
            <br />
            {product.stock ? (
              <button onClick={() => addToCart()}>Add to cart</button>
            ) : (
              <button disabled>Add to cart</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
