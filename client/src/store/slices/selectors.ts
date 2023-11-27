import { AppState } from 'store/store';

// Auth Related Selectors
export const selectCurrentUser = (state: AppState) => state.auth.user;
export const selectCurrentToken = (state: AppState) => state.auth.token;

// Category Related Selectors
export const selectCurrentCategory = (state: AppState) => state.category.mainCategory;

// Product Related Selectors
export const selectCurrentProduct = (state: AppState) => state.product.product;
export const selectCurrentProducts = (state: AppState) => state.product.products;
export const selectCurrentProductResponse = (state: AppState) => state.product.productResponse;
export const selectCurrentProductCategories = (state: AppState) => state.product.productCategories;

// Cart Related Selectors
export const selectSelectedProducts = (state: AppState) => state.cart.selectedProducts;
export const selectCartQuantity = (state: AppState) => state.cart.cartQuantity;
export const selectCartTotal = (state: AppState) => state.cart.cartTotal;
