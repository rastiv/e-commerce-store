import { LoginForm } from "./LoginForm";
import { lazy } from "react";

export { LoginForm };
export const LoginPageAsync = lazy(() => import("./LoginPage"));
