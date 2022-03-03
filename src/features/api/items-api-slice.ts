import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../models/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://60a0e51dd2855b00173b15c9.mockapi.io/products",
  }),
  tagTypes: ["Items"],
  endpoints(builder) {
    return {
      fetchItems: builder.query<Item[], number | void>({
        query: () => ({
          url: `/`,
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchItemsQuery } = apiSlice;
