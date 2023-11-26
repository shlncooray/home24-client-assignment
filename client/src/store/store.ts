/*
 * File name: store.ts
 * Purpose: App Redux Store
 * Created on Sun Nov 20 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

/* eslint-disable import/no-cycle */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import categoryReducer from './slices/category.slice';
import productReducer from './slices/product.slice';
import createReducer from './slices/cart.slice';
import apiSlice from './api.slice';
import graphqlApiSlice from './graphqlApi.slice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [graphqlApiSlice.reducerPath]: graphqlApiSlice.reducer,
    category: categoryReducer,
    product: productReducer,
    cart: createReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, graphqlApiSlice.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
