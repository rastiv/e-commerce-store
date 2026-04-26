export const AuthProvider = {
  LOCAL: "LOCAL",
  GOOGLE: "GOOGLE",
} as const;

export type AuthProviderType = (typeof AuthProvider)[keyof typeof AuthProvider];
