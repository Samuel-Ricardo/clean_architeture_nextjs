import { ProductGateway } from "@/@core/domain/gateway/product.gateway";

export class ListProductsUseCase {

  constructor(private gateway: ProductGateway) {}

  async execute() {
    return this.gateway.findAll();
  }

}
