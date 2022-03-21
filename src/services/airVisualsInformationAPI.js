import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const airVisualsApiHeaders = {
  "x-rapidapi-host": "airvisual1.p.rapidapi.com",
  "x-rapidapi-key": "--------------------------------------",
};
const baseUrl = "https://airvisual1.p.rapidapi.com/cities/v2";

const createRequest = (url) => ({ url, headers: airVisualsApiHeaders });

// Define a service using a base URL and expected endpoints
export const airVisualsInformationApi = createApi({
  reducerPath: "airVisualsInformationApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAirVisualInformations: builder.query({
      query: (id) => createRequest(`/get-information?id=${id}`),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAirVisualInformationsQuery } = airVisualsInformationApi;
