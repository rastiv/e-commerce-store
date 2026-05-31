import type { StateSchema } from "@/app/store";

export const selectIsUserLoading = (state: StateSchema) => state.user.isLoading;
