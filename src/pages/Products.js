import { useFetch } from "../hooks/useFetch";

const Products = () => {
  // api with objects
  const { data } = useFetch(
    "https://my-json-server.typicode.com/AhmedLabeeb110/fwood-ecommerce-db/allproducts"
  );

  return (
    <div>{data && data.map((allproduct) => <h2>{allproduct.name}</h2>)}</div>
  );
};

export default Products;
