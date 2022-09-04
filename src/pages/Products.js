import "./Products.css";

import { useFetch } from "../hooks/useFetch";

const Products = () => {
  // api with objects
  const { data } = useFetch(
    "https://my-json-server.typicode.com/AhmedLabeeb110/fwood-ecommerce-db/allproducts "
  );

  return (
    <div className="product">
      {data &&
        data.map((allproduct) => (
          <div className="product-card" key={allproduct.id}>
            <p className="sellingStatus">{allproduct.sellingStatus}</p>
            <img src={allproduct.image} alt="images" />
            <div className="productTitle">{allproduct.name}</div>
            <div className="productPrice">{allproduct.price}</div>
            <p className="productDescription">{allproduct.description}</p>
            <p className="stock">{allproduct.stock}</p>
            <button className="seeDetails">See Details</button>
          </div>
        ))}
    </div>
  );
};

export default Products;
