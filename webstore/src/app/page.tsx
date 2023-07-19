import { ListProductsUseCase } from '@/@core/application/product/list-products.use-case'
import { CartProvider } from './context/cart.provider'
import { Product, ProductProps } from '@/@core/domain/entities/product'
import { Registry, container } from '@/@core/infra/container-registry'
import { GetServerSideProps, NextPage } from 'next'
import Link from "next/link";

export type HomeProps = {
  products: ProductProps[]
}

const Home: NextPage = async () => {  

  const useCase = container.get<ListProductsUseCase>(Registry.ListProductUseCase);
  const products = (await useCase.execute())
    
  

return (
  <CartProvider> 
    <div>
      <h1>E-Commerce :D</h1>
        <ul>
          {products.map((product, key) => (
            <li key={key}>
              <label>Nome: </label> {product.name} | 
              <Link href={`/products/${product.id}`} passHref>
                Ver
              </Link>
            </li>
          ))}
        </ul>
    </div>
  </CartProvider>
)}
export default Home;
