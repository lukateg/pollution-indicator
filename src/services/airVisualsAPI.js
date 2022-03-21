// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const airVisualsApiHeaders = {
  "x-rapidapi-host": "airvisual1.p.rapidapi.com",
  "x-rapidapi-key": "---------------------------------------",
};
const baseUrl = "https://airvisual1.p.rapidapi.com/v2";

const createRequest = (url) => ({ url, headers: airVisualsApiHeaders });

// Define a service using a base URL and expected endpoints
export const airVisualsApi = createApi({
  reducerPath: "airVisualsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAirVisuals: builder.query({
      query: (name) => createRequest(`/auto-complete?q=${name}`),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAirVisualsQuery } = airVisualsApi;
