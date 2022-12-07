import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import * as Configs from "./index";

export const makeStore = () =>
  configureStore({
    reducer: {
      [Configs.newsApi.reducerPath]: Configs.newsApi.reducer,
    },
    middleware: (gDM) => gDM().concat(Configs.newsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
