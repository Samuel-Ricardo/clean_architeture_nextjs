'use client';

import { Product, ProductProps } from "@Core/domain/entities/product"
import { GetStaticPathsResult } from "next";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart.provider";
import { Registry, container } from "@Core/infra/container-registry";
import { GetProductUseCase } from "@Core/application/product/get-product.use-case";
import { usePathname } from "next/navigation";

export type PropductDetailProps = {
  product: ProductProps;
};

export function PropductDetail () {

  const id = usePathname()?.split("/")[2];

  const getProuct = container.get<GetProductUseCase>(Registry.GetProductUseCase);
  const [product, setProduct] = useState<Product>(new Product({id: 0, name: '', price: 0, description: ''})); 

  useEffect(() => { getProuct.execute(+id!).then(product => setProduct(product)) } , [id]) 


  const entity = new Product({id: product.id, name: product.name, price: product.price, description: product.description});
  const context = useContext(CartContext);

  return (
    <div>
      <h3>
        {entity.name}
      </h3>

      <label> Preço: </label> {entity.price}

      <button onClick={() => context.addProduct(entity) }> 
        Adicionar no carrinho
      </button>
    </div>
  )
};

export default PropductDetail;
