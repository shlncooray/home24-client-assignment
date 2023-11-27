import { createSlice } from '@reduxjs/toolkit';
import { ProductSliceState } from 'models/product';

const initialState: ProductSliceState = {
  product: null,
  products: [],
  productCategories: [],
  productResponse: null,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductResponse: (state, action) => {
      const response = action.payload;
      state.productResponse = response;
    },
    setProductCategories: (state, action) => {
      state.productCategories = action.payload;
    },
  },
});

export const { setProduct, setProducts, setProductResponse, setProductCategories } =
  productSlice.actions;

export default productSlice.reducer;
