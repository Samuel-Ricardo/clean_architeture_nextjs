import { Product } from "./product"

export type CartProps = {
  products: Product[];
}

export class Cart {

  constructor(public props: CartProps) {}

}
