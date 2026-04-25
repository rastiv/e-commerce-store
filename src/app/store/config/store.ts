import {
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from "@reduxjs/toolkit";

import type { StateSchema } from "./StateSchema";

export const createStore = (initialState: StateSchema) =>
  configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
