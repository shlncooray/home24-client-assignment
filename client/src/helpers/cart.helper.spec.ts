/*
 * File name: cart.helper.spec.ts
 * Purpose: Unit Tests for the shopping cart related functionalites
 * Created on Mon Nov 27 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */
import { CartSliceState } from 'models/cart';
import { Product } from 'models/product';
import { addToCart, removeFromCart } from './cart.helper';

describe('Test - Shopping Cart related functionality', () => {
  // Initial state
  const initialState: CartSliceState = {
    selectedProducts: [],
    cartQuantity: 0,
    cartTotal: 0,
  };

  // Mock products
  const mockProduct1: Product = {
    name: 'Test Product 1',
    variantName: 'Test Variant 1',
    sku: 'test-sku1',
    image: 'test-image.jpg',
    price: 100.5,
    currency: 'EUR',
    rating: {
      count: 0,
      average: 4.5,
    },
  };

  const mockProduct2: Product = {
    name: 'Test Product 1',
    variantName: 'Test Variant 1',
    sku: 'test-sku2',
    image: 'test-image1.jpg',
    price: 999.99,
    currency: 'EUR',
    rating: {
      count: 0,
      average: 4.5,
    },
  };

  const updatedState: CartSliceState = { ...initialState };
  test('should add a new product to the cart', () => {
    // Call the addToCart function
    addToCart(updatedState, mockProduct1, 3);

    // Check if the state is updated correctly
    expect(updatedState.selectedProducts).toHaveLength(1);
    expect(updatedState.selectedProducts[0].product).toEqual(mockProduct1);
    expect(updatedState.selectedProducts[0].quantity).toBe(3);
    expect(updatedState.cartQuantity).toBe(3);
    expect(updatedState.cartTotal).toBe(301.5);
  });

  test('should add another product to the cart', () => {
    // Call the addToCart function
    addToCart(updatedState, mockProduct2, 1);

    // Check if the state is updated correctly
    expect(updatedState.selectedProducts).toHaveLength(2);
    expect(updatedState.selectedProducts[1].product).toEqual(mockProduct2);
    expect(updatedState.selectedProducts[1].quantity).toBe(1);
    expect(updatedState.cartQuantity).toBe(4);
    expect(updatedState.cartTotal).toBe(1301.49);
  });

  test('should remove give product from the cart', () => {
    // Call the addToCart function
    removeFromCart(updatedState, mockProduct1);

    // Check if the state is updated correctly
    expect(updatedState.selectedProducts).toHaveLength(1);
    expect(updatedState.selectedProducts[0].product).toEqual(mockProduct2);
    expect(updatedState.selectedProducts[0].quantity).toBe(1);
    expect(updatedState.cartQuantity).toBe(1);
    expect(updatedState.cartTotal).toBe(999.99);
  });
});
