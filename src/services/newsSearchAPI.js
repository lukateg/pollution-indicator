import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const NewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "---------------------------------------",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = (url) => ({ url, headers: NewsHeaders });

export const newsSearchAPI = createApi({
  reducerPath: "newsSearchAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (newsCategory) =>
        createRequest(
          `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsSearchAPI;
