import type { StateSchema } from "@/app/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserData = {
  id: string;
  email: string;
  name: string;
  age: number;
  gender: string;
  role: string;
  emailVerified: boolean;
  twoFactorEnabled: boolean;
  createdAt: string;
  updatedAt: string;
};

export type AuthData = {
  user: UserData;
  session: unknown;
};

export type AuthState = {
  user: UserData | null;
  isAuth: boolean;
};

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    clearUserData: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { setUserData, clearUserData } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuth = (state: StateSchema) => state.auth.isAuth;
export const selectCurrentUser = (state: StateSchema) => state.auth.user;
