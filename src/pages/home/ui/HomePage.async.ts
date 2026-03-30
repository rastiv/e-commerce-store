import { lazy } from "react";

export const HomePageAsync = () => lazy(() => import("./HomePage"));
// export const HomePageAsync = () =>
//   lazy(
//     () =>
//       new Promise((resolve) => {
//         // @ts-expect-error Simulate network delay for demonstration purposes
//         setTimeout(() => resolve(import("./HomePage")), 1500);
//       }),
//   );
