import type { RouteProps } from "react-router";
import { HomePageAsync } from "@/features/home";
import { AppRouter, routePaths } from "@/shared/config";
import { NotFoundPageAsync } from "@/shared/components/PageNotFound";
import { LoginPageAsync } from "@/features/auth";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  guestOnly?: boolean;
};

export const routeConfig: AppRouteProps[] = [
  {
    path: routePaths[AppRouter.HOME],
    element: <HomePageAsync />,
  },
  {
    path: routePaths[AppRouter.LOGIN],
    element: <LoginPageAsync />,
    guestOnly: true,
  },
  {
    path: routePaths[AppRouter.REGISTER],
    element: <LoginPageAsync />,
    guestOnly: true,
  },
  {
    path: routePaths[AppRouter.NOT_FOUND],
    element: <NotFoundPageAsync />,
  },
];
