/*
 * File name: cart.ts
 * Purpose: Shopping Cart related interfaces/types
 * Created on Sun Nov 25 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { Product } from './product';

interface CartProduct {
  quantity: number;
  product: Product;
}

interface CartSliceState {
  selectedProducts: CartProduct[];
  cartQuantity: number;
  cartTotal: number;
}

export type { CartProduct, CartSliceState };
