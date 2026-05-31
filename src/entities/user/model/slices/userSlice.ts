import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { initUserData } from "../services/initUserData";
import type { User, UserShema } from "../types/UserSchema";

const initialState: UserShema = {
  userData: undefined,
  isLoading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    clearUserData: (state) => {
      state.userData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initUserData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(initUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(initUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
