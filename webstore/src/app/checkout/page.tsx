import { NextPage } from "next";
import { FormEvent, useContext } from "react";
import { CartContext } from "../context/cart.provider";
import { useRouter } from "next/router";
import { Registry, container } from "@/@core/infra/container-registry";
import { ProcessOrderUseCase } from "@/@core/application/order/process-order.use-case";

type Props = {};

export const CheckoutPage: NextPage = (props: Props) => {
  
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
}
