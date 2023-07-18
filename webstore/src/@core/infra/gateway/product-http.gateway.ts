import { Product } from "@/@core/domain/entities/product";
import { ProductGateway } from "@Core/domain/gateway/product.gateway";
import { AxiosInstance } from "axios";

export class ProductHttpGateway implements ProductGateway{

  constructor(private http: AxiosInstance) {}

  async findAll() {
    return this
      .http
      .get<Product[]>('/products')
      .then(res => res
        .data
        .map( data => new Product(
          {id: data.id, name: data.name, price: data.price, description: data.description}
        )
      )
    );  
  }

}
