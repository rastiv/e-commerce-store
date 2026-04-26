import type { AuthMethodType } from "@/shares/config";

export type LoginFormSchema = {
  email?: string;
  phone?: string;
  password: string;
  isLoading: boolean;
  error?: string;
  method: AuthMethodType;
};
