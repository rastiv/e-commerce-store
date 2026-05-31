import type { StateSchema } from "@/app/store";

export const selectUser = (state: StateSchema) => state.user.userData;
