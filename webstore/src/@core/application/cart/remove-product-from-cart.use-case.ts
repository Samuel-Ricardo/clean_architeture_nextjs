import { CartGateway } from "@/@core/domain/gateway/cart.gateway";

export class RemoveProductFromCartUseCase {

  constructor( private gateway: CartGateway ){}

  execute( productId: number ) {
    const cart = this.gateway.get();
  
    cart.removeProduct( productId );

    this.gateway.save( cart );

    return cart;
  }

}
