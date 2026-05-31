import { createAsyncThunk } from "@reduxjs/toolkit";

import { userActions } from "@/entities/user";

import { $api } from "@/shared/api";
import { getErrorCode } from "@/shared/libs";

export const logout = createAsyncThunk<
  ApiResponse<{ data: null }>,
  { rejectValue: string }
>("features/logout", async (_, thunkApi) => {
  try {
    const res =
      await $api.post<ApiResponse<{ data: null }>>(`/api/auth/sign-out`);
    const responseData = res.data;
    thunkApi.dispatch(userActions.clearUserData());
    return responseData;
  } catch (error) {
    const errorKey = getErrorCode(error);
    return thunkApi.rejectWithValue(errorKey);
  }
});
