/*
 * File name: category.slice.ts
 * Purpose: Category related RTK set reducers
 * Created on Sun Nov 22 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

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
