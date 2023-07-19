import 'reflect-metadata';

import { Container } from "inversify";
import { http } from "./http";
import { ProductHttpGateway } from "./gateway/product-http.gateway";
import { CartLocalStorageGateway } from "./gateway/cart-local-storage.gateway";
import { OrderHttpGateway } from "./gateway/order-http.gateway";
import { ListProductsUseCase } from "../application/product/list-products.use-case";
import { GetProductUseCase } from "../application/product/get-product.use-case";
import { GetCartUseCase } from "../application/cart/get-cart.use-case";
import { AddProductInCartUseCase } from "../application/cart/add-product-in-cart.use-case";
import { RemoveProductFromCartUseCase } from "../application/cart/remove-product-from-cart.use-case";
import { GetOrderUseCase } from "../application/order/get-order.use-case";
import { ClearCartUseCase } from "../application/cart/clear-cart.use-case";
import { ProcessOrderUseCase } from "../application/order/process-order.use-case";

export const Registry = {

  AxiosAdpter: Symbol.for('AxiosAdpter'),

  ProductGateway: Symbol.for('ProductGateway'),
  CartGateway: Symbol.for('CartGateway'),
  OrderGateway: Symbol.for('OrderGateway'),

  ListProductUseCase: Symbol.for('ListProductUseCase'),
  GetProductUseCase: Symbol.for('GetProductUseCase'),

  GetCartUseCase: Symbol.for('GetCartUseCase'),
  AddProductToCartUseCase: Symbol.for('AddProductToCartUseCase'),
  RemoveProductFromCartUseCase: Symbol.for('RemoveProductFromCartUseCase'),
  ClearCartUseCase: Symbol.for('ClearCartUseCase'),

  GetOrderUseCase: Symbol.for('GetOrderUseCase'),
  ProcessOrderUseCase: Symbol.for('ProcessOrderUseCase'),

};

export const container = new Container();

container.bind(Registry.AxiosAdpter).toConstantValue(http);


container.bind(Registry.ProductGateway).toDynamicValue(context => new ProductHttpGateway(context.container.get(Registry.AxiosAdpter)));
container.bind(Registry.CartGateway).to(CartLocalStorageGateway);
container.bind(Registry.OrderGateway).toDynamicValue(context => new OrderHttpGateway(context.container.get(Registry.AxiosAdpter)));


container.bind(Registry.ListProductUseCase).toDynamicValue(
  context => new ListProductsUseCase(context.container.get(Registry.ProductGateway))
);
container.bind(Registry.GetProductUseCase).toDynamicValue(
  context => new GetProductUseCase(context.container.get(Registry.ProductGateway))
);


container.bind(Registry.GetCartUseCase).toDynamicValue(
  context => new GetCartUseCase(context.container.get(Registry.CartGateway))
);
container.bind(Registry.AddProductToCartUseCase).toDynamicValue(
  context => new AddProductInCartUseCase(context.container.get(Registry.CartGateway))
);
container.bind(Registry.RemoveProductFromCartUseCase).toDynamicValue(
  context => new RemoveProductFromCartUseCase(context.container.get(Registry.CartGateway))
)
container.bind(Registry.ClearCartUseCase).toDynamicValue(
  context => new ClearCartUseCase(context.container.get(Registry.CartGateway))
)


container.bind(Registry.GetOrderUseCase).toDynamicValue(
  context => new GetOrderUseCase(context.container.get(Registry.OrderGateway))
);
container
  .bind(Registry.ProcessOrderUseCase)
  .toDynamicValue(
    context => new ProcessOrderUseCase(
      context.container.get(Registry.OrderGateway),
      context.container.get(Registry.CartGateway)
    )
  );
 
