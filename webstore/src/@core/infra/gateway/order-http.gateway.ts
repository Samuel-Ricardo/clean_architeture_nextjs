import { Order } from "@/@core/domain/entities/order";
import { Product } from "@/@core/domain/entities/product";
import { OrderGateway } from "@Core/domain/gateway/order.gateway";
import { AxiosInstance } from "axios";

export class OrderHttpGateway  implements OrderGateway {

  constructor(private readonly http: AxiosInstance) {}
    insert(order: Order): Promise<Order> {
      return this
        .http
        .post(`/orders`, order.toJSON())
        .then( res => {
          order.props.id = res.data.id;
          return order;
        });
    }
    findById(id: number): Promise<Order> {
      return this
        .http
        .get(`/orders/${id}`)
        .then(res => new Order({
          id: res.data.id,
          credit_card_number: res.data.credit_card_number,
          products: res.data.products.map((product: any) => new Product(
            {id: product.id, name: product.name, price: product.price, description: product.description}
          ))
      }))
    }

}
