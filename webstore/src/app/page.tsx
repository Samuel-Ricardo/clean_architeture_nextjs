import Image from 'next/image'
import { CartProvider } from './context/cart.provider'
import { Product, ProductProps } from '@/@core/domain/entities/product'

export default function Home() {
  
  type HomeProps = {
    products: ProductProps[]
  }

  return (
    <CartProvider> 
      <div>
        Hello World!
      </div>
    </CartProvider>
  )
}
