import type { RouteProps } from "react-router";
import HomePage from "@/pages/home/ui/HomePage";
import LoginPage from "@/pages/login/ui/LoginPage";
import { AppRouter, routePaths } from "@/shares/config";
import { NotFoundPage } from "@/pages/NotFound";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRouter.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRouter.LOGIN],
    element: <LoginPage />,
  },
  {
    path: routePaths[AppRouter.REGISTER],
    element: <LoginPage />,
  },
  {
    path: routePaths[AppRouter.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
