import type { AuthState } from "@/features/auth/store/authSlice";

export interface StateSchema {
  auth: AuthState;
  // here we will add: products: ProductsState;
}
