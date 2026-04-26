import type { LoginFormSchema } from "@/features/login";

import type { UserShema } from "@/entities/user";

export interface StateSchema {
  user: UserShema;
  loginForm: LoginFormSchema;
}
