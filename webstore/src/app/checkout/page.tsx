import { NextPage } from "next";
import { FormEvent, useContext } from "react";
import { CartContext } from "../context/cart.provider";
import { useRouter } from "next/router";
import { Registry, container } from "@/@core/infra/container-registry";
import { ProcessOrderUseCase } from "@/@core/application/order/process-order.use-case";

type Props = {};

const CheckoutPage: NextPage = (props: Props) => {
  
  const cartContext = useContext(CartContext);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const credit_card_number = event.currentTarget.creadit_card_number.value;
    const processOrderUseCase = container.get<ProcessOrderUseCase>(Registry.ProcessOrderUseCase);
    
    const order = await processOrderUseCase.execute({
      products: cartContext.cart.products,
      credit_card_number,
    });

    cartContext.reload();

    router.push(`/checkout/${order.id}/success`);
  }

  return (
    <div>

      <h3>Meu Carrinho</h3>

      <ul>
        {cartContext.cart.products.map(product => (
          <li key={product.id}>
            Produto {product.name} - {product.price}
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit}> 

        <div>
          
          <label htmlFor="" > Cartão de Crédito </label>        
          <input
            type="text"
            name="creadit_card_number"
            id="creadit_card_number"
          />  

        </div>
        
        <div>
          <button type="submit">Comprar</button>
        </div>

      </form>
    </div>
  )
}

export default CheckoutPage;
