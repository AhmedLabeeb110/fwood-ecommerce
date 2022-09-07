import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Product = () => {
  const { id } = useParams()
  const url = "https://my-json-server.typicode.com/AhmedLabeeb110/fwood-ecommerce-db/allproducts/" + id
  const { data: product } = useFetch(url)

  return (
    <div>
    {product && 
      <h1>{product.name}</h1>
    }
    </div>
  )
}

export default Product