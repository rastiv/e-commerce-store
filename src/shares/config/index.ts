import { routePaths, AppRouter } from "./router/routerPaths";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
} from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import type { ThemeType } from "./theme/ThemeContext";

export {
  routePaths,
  AppRouter,
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  useTheme,
};
export type { ThemeType };
