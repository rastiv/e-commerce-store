import {
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from "@reduxjs/toolkit";

import { loginReducer } from "@/features/login";

import { userReducer } from "@/entities/user";

import type { StateSchema } from "./StateSchema";

export const createStore = (initialState: StateSchema) =>
  configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
      user: userReducer,
      loginForm: loginReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
