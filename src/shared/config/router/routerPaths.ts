export const AppRouter = {
  HOME: "home",
  LOGIN: "login",
  REGISTER: "register",
  FORGOTTEN_PASSWORD: "forgotten-password",
  NOT_FOUND: "not_found",
} as const;

type AppRoutes = (typeof AppRouter)[keyof typeof AppRouter];

export const routePaths: Record<AppRoutes, string> = {
  [AppRouter.HOME]: "/",
  [AppRouter.LOGIN]: "/login",
  [AppRouter.REGISTER]: "/register",
  [AppRouter.FORGOTTEN_PASSWORD]: "/forgotten-password",
  [AppRouter.NOT_FOUND]: "*",
};
