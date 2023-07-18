import { Cart } from "../entities/carts";

export interface CartGateway {
  get(): Cart;
  save(cart: Cart): void;
}
