import { CartProvider } from './context/cart.provider'
import { Product, ProductProps } from '@/@core/domain/entities/product'
import { NextPage } from 'next'

export type HomeProps = {
  products: ProductProps[]
}

const Home: NextPage<HomeProps> = ({products}) => (  

  <CartProvider> 
    <div>
      Hello World!
    </div>
  </CartProvider>
)

export default Home;
