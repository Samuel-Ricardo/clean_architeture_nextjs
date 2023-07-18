import { Order } from "@/@core/domain/entities/order";
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
        throw new Error("Method not implemented.");
    }

}
