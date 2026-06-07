import { Route, Routes } from "react-router";
import { MainLayout } from "@/shared/components/layout/MainLayout";
import { routeConfig } from "./routerConfig";
import { RequireGuest, RequireAuth } from "./routerGuards";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routeConfig.map(({ path, element, authOnly, guestOnly }) => {
          return (
            <Route
              key={path}
              path={path}
              element={
                guestOnly ? (
                  <RequireGuest>{element}</RequireGuest>
                ) : authOnly ? (
                  <RequireAuth>{element}</RequireAuth>
                ) : (
                  element
                )
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};
