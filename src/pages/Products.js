import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/AhmedLabeeb110/fwood-ecommerce-db/db")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return <div></div>;
};

export default Products;
