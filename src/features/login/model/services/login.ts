import { createAsyncThunk } from "@reduxjs/toolkit";

import { userActions, type User } from "@/entities/user";

import { $api } from "@/shared/api";
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
    const res = await $api.post<ApiResponse<User>>(
      `/api/auth/sign-in`,
      authData,
    );
    const responseData = res.data;
    const user = responseData.data;

    thunkApi.dispatch(userActions.setUserData(user));
    return responseData;
  } catch (error) {
    const errorKey = getErrorCode(error);
    return thunkApi.rejectWithValue(errorKey);
  }
});
