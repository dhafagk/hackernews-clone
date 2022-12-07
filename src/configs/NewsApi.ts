import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { ArticlesAPIResponse } from "../types/news.type";

const API_KEY = "9e8721c96a6542e0833e67d3d0c3fdc1";

export const newsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getDefaultNewsList: builder.query<ArticlesAPIResponse, void>({
      query: () => `top-headlines?country=id&apiKey=${API_KEY}`,
    }),
    getNewsListSearch: builder.query<ArticlesAPIResponse, string | void>({
      query: (query) => `everything?q=${query}&apiKey=${API_KEY}`,
    }),
  }),
});

export const {
  useGetDefaultNewsListQuery,
  useGetNewsListSearchQuery,
  util: { getRunningQueriesThunk },
} = newsApi;

export const { getDefaultNewsList, getNewsListSearch } = newsApi.endpoints;
