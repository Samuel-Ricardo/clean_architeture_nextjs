
export const Resgitry = {

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
