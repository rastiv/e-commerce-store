import type { RouteProps } from "react-router";
import HomePage from "@/pages/home/ui/HomePage";
import LoginPage from "@/pages/login/ui/LoginPage";
import { AppRouter, routePaths } from "@/shares/config";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRouter.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRouter.LOGIN],
    element: <LoginPage />,
  },
];
