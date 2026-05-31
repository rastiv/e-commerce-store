import { createAsyncThunk } from "@reduxjs/toolkit";

import { $api } from "@/shared/api";

import * as UserSchema from "../types/UserSchema";

export const initUserData = createAsyncThunk<
  UserSchema.User,
  void,
  { rejectValue: string }
>("user/initUserData", async (_, thunkApi) => {
  try {
    // Better-Auth стандартен ендпоинт за сесия
    const response = await $api.get("/api/auth/get-session");

    if (!response.data || !response.data.user) {
      return thunkApi.rejectWithValue("NO_SESSION_FOUND");
    }

    return response.data.user;
  } catch {
    return thunkApi.rejectWithValue("ERROR_FETCHING_SESSION");
  }
});
