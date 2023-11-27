/*
 * File name: graphqlApi.slice.ts
 * Purpose: RTK Query Slice for Graphql API Calls Wrapper
 * Created on Sun Nov 20 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

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
