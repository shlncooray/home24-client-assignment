/*
 * File name: category.slice.spec.ts
 * Purpose: Category Slice related state management unit tests
 * Created on Mon Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { CategorySliceState, MainCategory } from 'models/categories';
import categoryReducer, { setMainCategory } from './category.slice';

describe('categorySlice reducer', () => {
  it('should handle setMainCategory action', () => {
    const initialState: CategorySliceState = {
      mainCategory: null,
    };

    const newMainCategory: MainCategory = {
      title: 'Test Main Category',
      imageUrl: 'test-image.jpg',
      id: 'test-id',
    };

    const action = setMainCategory(newMainCategory);
    const nextState = categoryReducer(initialState, action);

    expect(nextState.mainCategory).toEqual(newMainCategory);
  });

  it('should handle setMainCategory action with null payload', () => {
    const initialState: CategorySliceState = {
      mainCategory: null,
    };

    const action = setMainCategory(null);
    const nextState = categoryReducer(initialState, action);

    expect(nextState.mainCategory).toBeNull();
  });
});
