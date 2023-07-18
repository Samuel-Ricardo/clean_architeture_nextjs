import { CartGateway } from "@Core/domain/gateway/cart.gateway";

export class GetCartUseCase {

  constructor(private cartGateway: CartGateway) {}

  execute(){
    return this.cartGateway.get();
  }

}
