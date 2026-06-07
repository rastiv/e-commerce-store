import { Navigate } from "react-router";

import { useAppSelector } from "@/app/store";
import { selectIsAuth } from "@/features/auth/store/authSlice";
import { AppRouter, routePaths } from "@/shared/config";

type RequireAuthProps = {
  children: React.ReactNode;
};
export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isAuth = useAppSelector(selectIsAuth);

  return isAuth ? (
    <>{children}</>
  ) : (
    <Navigate to={routePaths[AppRouter.LOGIN]} replace />
  );
};

type RequireGuestProps = {
  children: React.ReactNode;
};
export const RequireGuest = ({ children }: RequireGuestProps) => {
  const isAuth = useAppSelector(selectIsAuth);

  return !isAuth ? (
    <>{children}</>
  ) : (
    <Navigate to={routePaths[AppRouter.HOME]} replace />
  );
};
