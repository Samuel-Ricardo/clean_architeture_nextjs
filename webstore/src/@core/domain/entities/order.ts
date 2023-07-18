import { Product } from "./product";

export type OrderProps = {
  id?: number;
  products: Product[];
  credit_card_number: string;
}

export class Order {

  constructor(public props: OrderProps) {}



}
