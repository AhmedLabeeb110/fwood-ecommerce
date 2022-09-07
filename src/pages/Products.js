import "./Products.css";
import { Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

const Products = () => {
  // api with objects
  const { data } = useFetch(
    "https://my-json-server.typicode.com/AhmedLabeeb110/fwood-ecommerce-db/allproducts"
  );

  return (
    <div className="container">
      <div className="products">
        {data &&
          data.map((allproduct) => (
            <div className="product-card" key={allproduct.id}>
              {allproduct.sellingStatus && (
                <span className="sellingStatus">
                  {allproduct.sellingStatus}
                </span>
              )}
              <img src={allproduct.image} alt="images" />
              <div className="productTitle">{allproduct.name}</div>
              <div className="productPrice">{allproduct.price}</div>
              <p className="productDescription">{allproduct.description}</p>
              <p className="stock">
                {allproduct.stock ? "in stock" : "out of stock"}
              </p>
              <br />
              <Link to={`/allproducts/${allproduct.id}`}>
              <button id="seeDetails">
                 See Details
              </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
