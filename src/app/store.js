import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { airVisualsApi } from "../services/airVisualsAPI";
import { waqiAPI } from "../services/waqiAPI";
import { airVisualsInformationApi } from "../services/airVisualsInformationAPI";
import { newsSearchAPI } from "../services/newsSearchAPI";

export const store = configureStore({
  reducer: {
    [airVisualsApi.reducerPath]: airVisualsApi.reducer,
    [airVisualsInformationApi.reducerPath]: airVisualsInformationApi.reducer,
    [waqiAPI.reducerPath]: waqiAPI.reducer,
    [newsSearchAPI.reducerPath]: newsSearchAPI.reducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(airVisualsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch);
