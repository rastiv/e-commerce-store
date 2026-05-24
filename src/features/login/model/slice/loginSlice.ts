import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { login } from "../services/login";
import type { LoginFormSchema } from "../types/loginFormSchema";

const initialState: LoginFormSchema = {
  email: "",
  password: "",
  isLoading: false,
  error: undefined,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetForm: (state) => {
      state.email = "";
      state.password = "";
      state.isLoading = false;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
