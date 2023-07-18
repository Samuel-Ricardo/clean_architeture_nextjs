import { CartGateway } from "@Core/domain/gateway/cart.gateway";

export class ClearCartUseCase {

  constructor(private gateway: CartGateway) {}

  execute() {
    const cart = this.gateway.get();
    cart.clear();

    this.gateway.save(cart);
    return cart;
  }

}
