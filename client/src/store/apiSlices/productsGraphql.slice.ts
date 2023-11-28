import graphqlApiSlice from 'store/graphqlApi.slice';
import { gql } from 'graphql-request';
import { ProductListResponse } from 'models/product';
import { getProductsQuery } from 'graphql/productQueries';

export const extendedApiSlice = graphqlApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query<ProductListResponse, { id: String; locale: String }>({
      query: ({ id, locale }: { id: String; locale: String }) => ({
        document: gql`
          ${getProductsQuery(id, locale)}
        `,
      }),
    }),
  }),
});

export const { useGetProductListQuery, useLazyGetProductListQuery } = extendedApiSlice;
