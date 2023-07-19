'use client';

import { PropsWithChildren, createContext, useCallback, useEffect, useState } from "react"
import { Product } from "@Core/domain/entities/product"
import { Cart } from "@Core/domain/entities/carts"
import { Registry, container } from "@/@core/infra/container-registry";
import { GetCartUseCase } from "@/@core/application/cart/get-cart.use-case";
import { AddProductInCartUseCase } from "@/@core/application/cart/add-product-in-cart.use-case";
import { RemoveProductFromCartUseCase } from "@/@core/application/cart/remove-product-from-cart.use-case";
import { ClearCartUseCase } from "@/@core/application/cart/clear-cart.use-case";

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

const getCart = container.get<GetCartUseCase>(Registry.GetCartUseCase);
const addProductToCart = container.get<AddProductInCartUseCase>(Registry.AddProductToCartUseCase);
const removeProductFromCart = container.get<RemoveProductFromCartUseCase>(Registry.RemoveProductFromCartUseCase);
const clearCart = container.get<ClearCartUseCase>(Registry.ClearCartUseCase);

export const CartProvider = ({children}: PropsWithChildren) => {
  
  const [cart, setCart] = useState(defaultContext.cart);
  
  const addProduct = useCallback((product: Product) => {
    const cart = addProductToCart.execute(product);
    setCart(cart);
  }, []);

  const removeProduct = useCallback((productID: number) => {
    const cart = removeProductFromCart.execute(productID);
    setCart(cart);
  }, []);

  const clear = useCallback(() => {
    const cart = clearCart.execute();
    setCart(cart);
  }, []);


  const reload = useCallback(() => {
    const cart = getCart.execute();
    setCart(cart);
  }, []);


  useEffect(() => reload(), [reload]);

  return (
    <CartContext.Provider value={{
      cart,
      addProduct,
      removeProduct,
      clear,
      reload
    }}>

      {children}

    </CartContext.Provider>
  )
}
