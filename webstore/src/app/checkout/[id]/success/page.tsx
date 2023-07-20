import { Order } from "@Core/domain/entities/order";
import { NextPage } from "next";

export type CheckoutSuccessPageProps = {
  order: Order;
};


export function CheckoutSuccessPage ({order}: CheckoutSuccessPageProps) {


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
