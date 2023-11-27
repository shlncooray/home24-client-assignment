import { createSlice } from '@reduxjs/toolkit';
import { CategorySliceState } from 'models/categories';

const initialState: CategorySliceState = {
  mainCategory: null,
};

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    setMainCategory: (state, action) => {
      state.mainCategory = action.payload;
    },
  },
});

export const { setMainCategory } = categorySlice.actions;

export default categorySlice.reducer;
