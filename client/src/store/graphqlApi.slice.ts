import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

const graphqlApiSlice = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: '/graphql',
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export default graphqlApiSlice;
