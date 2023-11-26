/*
 * File name: postGraphql.slice.ts
 * Purpose: Products related Graphql RTK endpoints
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import graphqlApiSlice from 'store/graphqlApi.slice';
// eslint-disable-next-line import/no-extraneous-dependencies
import { gql } from 'graphql-request';
import { ProductListResponse } from 'models/product';

export const extendedApiSlice = graphqlApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query<ProductListResponse, String>({
      query: (id) => ({
        document: gql`
          {
            categories: productLists(ids: "${id}", locale: de_DE) {
              name
              articleCount
              childrenCategories: childrenProductLists {
                list {
                  name
                  urlPath
                }
              }
              categoryArticles: articlesList(first: 50) {
                articles {
                  name
                  variantName
                  sku
                  variantName
                  prices {
                    currency
                    regular {
                      value
                    }
                  }
                  ratings {
                    count
                    average
                  }
                  images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
                    path
                  }
                }
              }
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetProductListQuery, useLazyGetProductListQuery } = extendedApiSlice;
