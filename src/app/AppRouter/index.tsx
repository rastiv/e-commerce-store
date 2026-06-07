import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { PageLoader } from "@/shared/components/PageLoader";
import { MainLayout } from "@/shared/components/layout/MainLayout";
import { routeConfig, type AppRouteProps } from "./routerConfig";
import { RequireAuth, RequireGuest } from "./routerGuards";

export const AppRouter = () => {
  const protectedRoutes = routeConfig.filter((route) => route.authOnly);
  const standaloneRoutes = routeConfig.filter((route) => !route.authOnly);

  <Route element={<MainLayout />}>asd</Route>;

  // return (
  //   <Routes>
  //     {protectedRoutes.map(({ path, element }: AppRouteProps) => (
  //       <Route key={path} path={path} element={<MainLayout />}>
  //         <Route
  //           index
  //           element={
  //             <RequireAuth>
  //               <Suspense fallback={<PageLoader />}>{element}</Suspense>
  //             </RequireAuth>
  //           }
  //         />
  //       </Route>
  //     ))}

  //     {standaloneRoutes.map(({ path, element, guestOnly }: AppRouteProps) => {
  //       const content = (
  //         <Suspense fallback={<PageLoader />}>{element}</Suspense>
  //       );

  //       return (
  //         <Route
  //           key={path}
  //           path={path}
  //           element={
  //             guestOnly ? <RequireGuest>{content}</RequireGuest> : content
  //           }
  //         />
  //       );
  //     })}
  //   </Routes>
  // );
};
