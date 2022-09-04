import "./Products.css"

import { useFetch } from "../hooks/useFetch";

const Products = () => {
  // api with objects
  const { data } = useFetch(
    "https://my-json-server.typicode.com/AhmedLabeeb110/fwood-ecommerce-db/allproducts "
  );
  //          <img src={}  />

  return (
    <div className="product">
      {data &&
        data.map((allproduct) => (
          <div className="product-card" key={allproduct.id}>
            <p className="sellingStatus">{allproduct.sellingStatus}</p>
            <div className="productTitle">{allproduct.name}</div>
            <div className="productPrice">{allproduct.price}</div>
            <p className="productDescription">{allproduct.description}</p>
            <p className="stock">{allproduct.stock}</p>
          </div>
        ))}
    </div>
  );
};

export default Products;
