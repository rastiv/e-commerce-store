export const AuthProvider = {
  LOCAL: "LOCAL",
  GOOGLE: "GOOGLE",
} as const;

export type AuthProviderType = (typeof AuthProvider)[keyof typeof AuthProvider];

export const AuthMethod = {
  EMAIL: "email",
  PHONE: "phone",
} as const;

export type AuthMethodType = (typeof AuthMethod)[keyof typeof AuthMethod];

export const LOCAL_STORAGE_USER_KEY = "app.user";
