import { Product, ProductProps } from "@Core/domain/entities/product"
import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";
import { useContext } from "react";
import { CartContext } from "../context/cart.provider";
import { Registry, container } from "@/@core/infra/container-registry";
import { GetProductUseCase } from "@/@core/application/product/get-product.use-case";

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

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<PropductDetailProps>> {
  const {id} = context.params || {}

  const getProuct = container.get<GetProductUseCase>(Registry.GetProductUseCase);
  const product = await getProuct.execute(+id!);

  return { props: { product } }
}
