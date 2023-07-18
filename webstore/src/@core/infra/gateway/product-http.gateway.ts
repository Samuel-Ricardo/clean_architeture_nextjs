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

  findById(id: number): Promise<Product> {
    return this
      .http
      .get<Product>(`/products/${id}`)
      .then(res => new Product(
          {
            id: res.data.id, 
            name: res.data.name, 
            price: res.data.price, 
            description: res.data.description
          }
        )
      );
  }

}
