import { Product } from 'models/product';
import cartReducer, { setRemoveProduct, setSelectedProducts } from './cart.slice';

describe('Test - cart slice state management', () => {
  // Initial state of cart slice
  const initialState = {
    selectedProducts: [],
    cartQuantity: 0,
    cartTotal: 0,
  };

  // Mock product
  const mockProduct1: Product = {
    name: 'Test Product 1',
    variantName: 'Test Variant 1',
    sku: 'test-sku1',
    image: 'test-image.jpg',
    price: 50,
    currency: 'EUR',
    rating: {
      count: 0,
      average: 4.5,
    },
  };

  const mockProduct2: Product = {
    name: 'Test Product 2',
    variantName: 'Test Variant 2',
    sku: 'test-sku2',
    image: 'test-image2.jpg',
    price: 100,
    currency: 'EUR',
    rating: {
      count: 1,
      average: 4.5,
    },
  };

  const action1 = setSelectedProducts({ product: mockProduct1, quantity: 3 });
  const state1 = cartReducer(initialState, action1);
  it('should handle setSelectedProducts state', () => {
    expect(state1.selectedProducts).toHaveLength(1);
    expect(state1.selectedProducts[0].product).toEqual(mockProduct1);
    expect(state1.selectedProducts[0].quantity).toBe(3);
    expect(state1.cartQuantity).toBe(3);
    expect(state1.cartTotal).toBe(150);
  });

  const action2 = setSelectedProducts({ product: mockProduct2, quantity: 1 });
  const state2 = cartReducer(state1, action2);
  it('should handle add more products to setSelectedProducts state', () => {
    expect(state2.selectedProducts).toHaveLength(2);
    expect(state2.selectedProducts[1].product).toEqual(mockProduct2);
    expect(state2.selectedProducts[1].quantity).toBe(1);
    expect(state2.cartQuantity).toBe(4);
    expect(state2.cartTotal).toBe(250);
  });

  const action3 = setRemoveProduct(mockProduct1);
  const state3 = cartReducer(state2, action3);
  it('should handle remove a product from setRemoveProduct state', () => {
    expect(state3.selectedProducts).toHaveLength(1);
    expect(state3.selectedProducts[0].product).toEqual(mockProduct2);
    expect(state3.selectedProducts[0].quantity).toBe(1);
    expect(state3.cartQuantity).toBe(1);
    expect(state3.cartTotal).toBe(100);
  });
});
