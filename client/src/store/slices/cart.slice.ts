import { createSlice } from '@reduxjs/toolkit';
import { addToCart, removeFromCart } from 'helpers/cart.helper';
import { CartSliceState } from 'models/cart';

const initialState: CartSliceState = {
  selectedProducts: [],
  cartQuantity: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setSelectedProducts: (state, action) => {
      const { product, quantity } = action.payload;
      addToCart(state, product, quantity);
    },
    setRemoveProduct: (state, action) => {
      removeFromCart(state, action.payload);
    },
  },
});

export const { setSelectedProducts, setRemoveProduct } = cartSlice.actions;

export default cartSlice.reducer;
