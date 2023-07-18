import { ProductGateway } from "@Core/domain/gateway/product.gateway";

export class GetProductUseCase {
  constructor(private productGateway: ProductGateway){}

  execute(id: number){ return this.productGateway.findById(id) }
}
