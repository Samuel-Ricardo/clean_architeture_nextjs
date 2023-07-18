import { OrderGateway } from "@Core/domain/gateway/order.gateway";

export class GetOrderUseCase {

  constructor(private orderGateway: OrderGateway){}

  async execute(id: number) {
    return this.orderGateway.findById(id);
  }

}

