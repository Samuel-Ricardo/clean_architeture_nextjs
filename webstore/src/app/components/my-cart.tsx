'use client';

import { PropsWithChildren, useContext } from "react";
import { CartContext } from "../context/cart.provider";
import Link from "next/link";

export const MyCart = (props: PropsWithChildren) => {
  const cartContext = useContext(CartContext);
  
  return (
    <nav>
      Cart - Total {cartContext.cart.total} | Items{" "}
      {cartContext.cart.products.length} |{" "}
      <Link href="/checkout" passHref>
        Finalizar Compra
      </Link>
    </nav>
  )
}

