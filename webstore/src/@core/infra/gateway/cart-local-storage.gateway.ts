import { Cart } from "@/@core/domain/entities/carts";
import { Product } from "@/@core/domain/entities/product";
import { CartGateway } from "@Core/domain/gateway/cart.gateway";
import { injectable } from "inversify";

@injectable()
export class CartLocalStorageGateway implements CartGateway {

  private readonly CART_KEY = "cart";

  get(): Cart {
    const products = JSON
      .parse(localStorage.getItem(this.CART_KEY) || "[]");
   
    return new Cart({
      products: products.map((product: any) => new Product({
        id: product.id, 
        name: product.name, 
        price: product.price, 
        description: product.description
      }))
    });
  }

}
