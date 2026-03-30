import { lazy } from "react";

// export const LoginPageAsync = () => lazy(() => import("./LoginPage"));
export const LoginPageAsync = () =>
  lazy(
    () =>
      new Promise((resolve) => {
        // @ts-expect-error Simulate network delay for demonstration purposes
        setTimeout(() => resolve(import("./LoginPage")), 1500);
      }),
  );
