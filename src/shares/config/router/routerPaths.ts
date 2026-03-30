export const AppRouter = {
  HOME: "home",
  LOGIN: "login",
  REGISTER: "register",
} as const;

type AppRoutes = (typeof AppRouter)[keyof typeof AppRouter];

export const routePaths: Record<AppRoutes, string> = {
  [AppRouter.HOME]: "/",
  [AppRouter.LOGIN]: "/login",
  [AppRouter.REGISTER]: "/register",
};
