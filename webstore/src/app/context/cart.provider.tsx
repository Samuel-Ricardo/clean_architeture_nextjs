import { createContext } from "react"
import { Product } from "@Core/domain/entities/product"
import { Cart } from "@Core/domain/entities/carts"

export type CartContextType = {
  cart: Cart;
  addProduct: (product: Product) => void;
  removeProduct: (productID: number) => void;
  clear: () => void;
  reload: () => void;
}

const defaultContext: CartContextType = {
  cart: new Cart({products: []}),
  addProduct: (product: Product) => {},
  removeProduct: (productID: number) => {},
  clear: () => {},
  reload: () => {},
}

export const CartContext = createContext<CartContextType>(defaultContext);
