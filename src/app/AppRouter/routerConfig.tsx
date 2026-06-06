import type { RouteProps } from "react-router";
import { HomePageAsync } from "@/features/home";
import { AppRouter, routePaths } from "@/shared/config";
import { NotFoundPageAsync } from "@/shared/components/PageNotFound";
import { LoginPageAsync } from "@/features/auth";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRouter.HOME],
    element: <HomePageAsync />,
  },
  {
    path: routePaths[AppRouter.LOGIN],
    element: <LoginPageAsync />,
  },
  {
    path: routePaths[AppRouter.REGISTER],
    element: <LoginPageAsync />,
  },
  {
    path: routePaths[AppRouter.NOT_FOUND],
    element: <NotFoundPageAsync />,
  },
];
