import { routePaths, AppRouter } from "./router/routerPaths";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
} from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { languageIconList } from "./i18n/LanguageIconList";
import type { ThemeType } from "./theme/ThemeContext";
import type {
  SupportedLngsType,
  LanguageIconListType,
} from "./i18n/LanguageIconList";

export {
  routePaths,
  AppRouter,
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  useTheme,
  languageIconList,
};
export type { ThemeType, SupportedLngsType, LanguageIconListType };
