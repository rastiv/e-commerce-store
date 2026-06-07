import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig, type AppRouteProps } from "./routerConfig";
import { PageLoader } from "@/shared/components/PageLoader";
import { RequireAuth, RequireGuest } from "./routerGuards";

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(
        ({ path, element, authOnly, guestOnly }: AppRouteProps) => {
          let protectedElement = element;

          if (authOnly) {
            protectedElement = <RequireAuth>{element}</RequireAuth>;
          }

          if (guestOnly) {
            protectedElement = <RequireGuest>{element}</RequireGuest>;
          }

          return (
            <Route
              key={path}
              path={path}
              element={
                <Suspense key={path} fallback={<PageLoader />}>
                  {protectedElement}
                </Suspense>
              }
            />
          );
        },
      )}
    </Routes>
  );
};
