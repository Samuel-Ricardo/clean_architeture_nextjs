import { Product, ProductProps } from "@Core/domain/entities/product"
import { NextPage } from "next";
import { useContext } from "react";
import { CartContext } from "../context/cart.provider";

export type PropductDetailProps = {
  product: ProductProps;
};

export const PropductDetail:NextPage<PropductDetailProps> = ({ product }: PropductDetailProps) => {
  
  const entity = new Product({...product});
  const cartContext = useContext(CartContext);

  return (
    <div>
      <h3>
        {entity.name}
      </h3>

      <label> Preço: </label> {entity.price}

      <button onClick={() => cartContext.addProduct(entity)}> 
        Adicionar no carrinho
      </button>
    </div>
  )
};

export default PropductDetail;



