/*
 * File name: cart.helper.ts
 * Purpose: Helper Function for Shopping Cart Operations
 * Created on Sun Nov 25 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

/* eslint-disable no-param-reassign */
import { CartProduct, CartSliceState } from 'models/cart';
import { Product } from 'models/product';

const addToCart = (state: CartSliceState, product: Product, qty: number) => {
  const convertedQty = parseInt(qty.toString(), 10);
  if (state.selectedProducts.length > 0) {
    const productFound = state.selectedProducts.find((sp) => {
      return sp.product.sku === product.sku;
    });
    if (productFound) {
      const updateProducts: CartProduct[] = state.selectedProducts.map((sp) =>
        sp.product.sku === product.sku ? { ...sp, quantity: sp.quantity + convertedQty } : sp,
      );
      state.selectedProducts = [...updateProducts];
    } else {
      state.selectedProducts = [...state.selectedProducts, { product, quantity: convertedQty }];
    }
  } else {
    state.selectedProducts = [...state.selectedProducts, { product, quantity: convertedQty }];
  }

  let cartQty = 0;
  let cartTotal = 0;

  state.selectedProducts.forEach((sp) => {
    cartQty += sp.quantity;
    cartTotal += sp.quantity * sp.product.price;
  });
  state.cartQuantity = cartQty;
  state.cartTotal = cartTotal;
};

const removeFromCart = (state: CartSliceState, product: Product) => {
  state.selectedProducts = [...state.selectedProducts.filter((s) => s.product.sku !== product.sku)];

  let cartQty = 0;
  let cartTotal = 0;

  state.selectedProducts.forEach((sp) => {
    cartQty += sp.quantity;
    cartTotal += sp.quantity * sp.product.price;
  });
  state.cartQuantity = cartQty;
  state.cartTotal = cartTotal;
};

export { addToCart, removeFromCart };
