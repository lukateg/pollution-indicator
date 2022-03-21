import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.waqi.info";
const token = "d18cbec2c7a4771e63f19d94c9aae75dd4a6a4f4";

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
