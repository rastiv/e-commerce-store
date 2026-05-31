import type { RouteProps } from "react-router";

import { HomePageAsync } from "@/pages/home";
import { LoginPageAsync } from "@/pages/login";
import { NotFoundPageAsync } from "@/pages/NotFound";

import { AppRouter, routePaths } from "@/shared/config";

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
