import type { StateSchema } from "@/app/store";

import { AuthMethod } from "@/shares/config";

export const selectLoginMethod = (state: StateSchema) =>
  state.loginForm.method ?? AuthMethod.EMAIL;
