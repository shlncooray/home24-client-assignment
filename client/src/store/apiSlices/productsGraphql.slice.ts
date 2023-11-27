import graphqlApiSlice from 'store/graphqlApi.slice';
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
