import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { userActions, type User } from "@/entities/user";

import { LOCAL_STORAGE_USER_KEY } from "@/shared/config";
import { getErrorCode } from "@/shared/libs";

type LoginArgs = {
  email?: string;
  password?: string;
};

export const login = createAsyncThunk<
  ApiResponse<User>,
  LoginArgs,
  { rejectValue: string }
>("features/login", async (authData, thunkApi) => {
  try {
    const res = await axios.post<ApiResponse<User>>(
      "http://localhost:3005/api/auth/sign-in",
      authData,
    );
    const responseData = res.data;
    const user = responseData.data;

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
    thunkApi.dispatch(userActions.setUserData(user));
    return responseData;
  } catch (error) {
    const errorKey = getErrorCode(error);
    return thunkApi.rejectWithValue(errorKey);
  }
});
