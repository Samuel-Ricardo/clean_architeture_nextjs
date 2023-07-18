import { Product } from "./product";

export type OrderProps = {
  id?: number;
  products: Product[];
  credit_card_number: string;
}
