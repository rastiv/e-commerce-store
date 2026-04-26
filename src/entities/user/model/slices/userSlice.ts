import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { User, UserShema } from "../types/UserSchema";

const initialState: UserShema = {
  userData: undefined,
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
});

export const { actions: userActions, reducer: userReducer } = userSlice;
