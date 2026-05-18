import type { AuthProviderType } from "@/shared/config";

export type User = {
  id: string;
  email?: string;
  phone?: string;
  isVerified?: boolean;
  provider: AuthProviderType;
};

export type UserShema = {
  userData?: User;
};
