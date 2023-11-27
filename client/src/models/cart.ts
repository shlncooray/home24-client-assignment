import { Product } from './product';

type CartProduct = {
  quantity: number;
  product: Product;
};

type CartSliceState = {
  selectedProducts: CartProduct[];
  cartQuantity: number;
  cartTotal: number;
};

export type { CartProduct, CartSliceState };
