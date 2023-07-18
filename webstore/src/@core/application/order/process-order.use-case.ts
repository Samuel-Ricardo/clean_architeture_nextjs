import { Order } from "@/@core/domain/entities/order";
import { Product } from "@/@core/domain/entities/product";
import { CartGateway } from "@/@core/domain/gateway/cart.gateway";
import { OrderGateway } from "@Core/domain/gateway/order.gateway";

export class ProcessOrderUseCase {

  constructor(
    private orderGateway: OrderGateway,
    private cartGateway: CartGateway
  ) {}

  async excute ({
    products,
    credit_card_number
  }:{
      products: Product[],
      credit_card_number: string
    }) {
   
    const order = new Order({products, credit_card_number});
    const newOrder = await this.orderGateway.insert(order);
    
    const cart = this.cartGateway.get();
    cart.clear()
    this.cartGateway.save(cart);

    return newOrder
  }

}
