import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.waqi.info";
const token = "----------------------------------";

const createRequest = (url) => ({ url });

export const waqiAPI = createApi({
  reducerPath: "waqiApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWaqiApi: builder.query({
      query: (country) =>
        createRequest(`/search/?token=${token}&keyword=${country}`),
    }),
  }),
});

export const { useGetWaqiApiQuery } = waqiAPI;
