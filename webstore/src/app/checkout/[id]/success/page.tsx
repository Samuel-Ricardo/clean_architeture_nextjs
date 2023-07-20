'use client';

import { GetOrderUseCase } from "@/@core/application/order/get-order.use-case";
import { Registry, container } from "@/@core/infra/container-registry";
import { CartContext } from "@/app/context/cart.provider";
import { Order } from "@Core/domain/entities/order";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export type CheckoutSuccessPageProps = {
  order: Order;
};


export function CheckoutSuccessPage ( ) {

  const id = useParams().id

  const getOrder = container.get<GetOrderUseCase>(Registry.GetOrderUseCase);

  console.log({id})

  const [order, setOrder] = useState<Order>(new Order({id: 0, products: [], credit_card_number: ''})); 



  useEffect(() => { 
    const execute = async () => setOrder(await getOrder.execute(+id!));
    execute();
  },[])

  console.log({order})


  return (
    <div>
      <h3>Parabéns Sua compra {order.id} foi efetivada</h3>
      <ul>
        {order.products.map( item => (
          <li key={item.id}>
            Produto {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CheckoutSuccessPage;
