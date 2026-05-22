import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { userActions } from "@/entities/user";

import { LOCAL_STORAGE_USER_KEY } from "@/shared/config";
import { getErrorKey } from "@/shared/libs";

type LoginArgs = {
  email?: string;
  phone?: string;
  password?: string;
};

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
  "features/login",
  async (authData, thunkApi) => {
    try {
      const res = await axios.post(
        "http://localhost:3005/api/auth/sign-in",
        authData,
      );
      const user = res.data;
      // console.log("user", user);

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
      thunkApi.dispatch(userActions.setUserData(user));
      return;
    } catch (error) {
      const errorKey = getErrorKey(error);
      return thunkApi.rejectWithValue(errorKey);
    }
  },
);
