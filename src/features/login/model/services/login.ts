import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { userActions } from "@/entities/user";

import { LOCAL_STORAGE_USER_KEY } from "@/shared/config";

type LoginArgs = {
  email?: string;
  phone?: string;
  password?: string;
};

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
  "features/login",
  async (authData, thunkApi) => {
    console.log("authData", authData);
    try {
      const res = await axios.post(
        "http://localhost:3005/api/auth/sign-in",
        authData,
      );
      const user = res.data;
      console.log("user", user);

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
      thunkApi.dispatch(userActions.setUserData(user));
      return;
      // eslint-disable-next-line
    } catch (error) {
      if (error instanceof Error) {
        console.log("error", error.message);
      }
      if (error instanceof AxiosError) {
        console.log("AxiosError", error.response?.data);
      }
      return thunkApi.rejectWithValue("Login failed");
    }
  },
);
