/*
 * File name: product.ts
 * Purpose: Products related interfaces/types
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

interface ProductSliceState {
  product: Product | null;
  products: Product[] | [];
  productCategories: ProductCategory[] | [];
  productResponse: ProductListResponse | null;
}

interface Product {
  name: string;
  variantName: string;
  sku: string;
  image: string;
  price: number;
  currency: string;
  rating: Rating;
}

interface ProductCategory {
  name: string;
  urlPath: string;
}

interface Rating {
  count: number;
  average: number;
}

interface Articles {
  images: { path: string }[];
  name: string;
  variantName: string;
  sku: string;
  prices: {
    currency: string;
    regular: {
      value: number;
    };
  };
  ratings: Rating;
}

interface CategoryArticle {
  articles: Articles[];
}

interface ChildrenCategories {
  list: {
    name: string;
    urlPath: string;
  }[];
}

interface Category {
  articleCount: number;
  name: string;
  childrenCategories: ChildrenCategories;
  categoryArticles: CategoryArticle;
}

interface ProductListResponse {
  categories: Category[];
}

export type {
  ChildrenCategories,
  Product,
  ProductCategory,
  ProductListResponse,
  ProductSliceState,
};
