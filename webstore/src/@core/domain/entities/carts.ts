import { Product } from "./product"

export type CartProps = {
  products: Product[];
}

export class Cart {

  constructor(public props: CartProps) {}

  get total() {
    return this.props.products.reduce((total, product) => total + product.price, 0)
  }

  get products() {
    return this.props.products;
  }

}
