export const AppRouter = {
  HOME: "home",
  LOGIN: "login",
  REGISTER: "register",
  NOT_FOUND: "not_found",
} as const;

type AppRoutes = (typeof AppRouter)[keyof typeof AppRouter];

export const routePaths: Record<AppRoutes, string> = {
  [AppRouter.HOME]: "/",
  [AppRouter.LOGIN]: "/login",
  [AppRouter.REGISTER]: "/register",

  // This route should be last in the list, as it is a catch-all for undefined routes
  [AppRouter.NOT_FOUND]: "*",
};
