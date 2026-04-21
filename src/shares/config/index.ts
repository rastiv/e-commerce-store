import { languageIconList } from "./i18n/LanguageIconList";
import type {
  SupportedLngsType,
  LanguageIconListType,
} from "./i18n/LanguageIconList";
import { routePaths, AppRouter } from "./router/routerPaths";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
} from "./theme/ThemeContext";
import type { ThemeType } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

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
