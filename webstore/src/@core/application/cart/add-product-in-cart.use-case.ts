import { Product } from "@Core/domain/entities/product";
import { CartGateway } from "@Core/domain/gateway/cart.gateway";

export class AddProductInCartUseCase {

  constructor(private gateway: CartGateway) {}

  execute(product: Product) {
    const cart = this.gateway.get();
    cart.addProduct(product);

    this.gateway.save(cart);
    return cart;
  }

}
