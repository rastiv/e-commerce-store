import { AuthProvider, type AuthProviderType } from "./auth/auth";
import {
  languageIconList,
  type SupportedLngsType,
  type LanguageIconListType,
} from "./i18n/LanguageIconList";
import { routePaths, AppRouter } from "./router/routerPaths";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  type ThemeType,
} from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export {
  routePaths,
  AppRouter,
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  useTheme,
  languageIconList,
  AuthProvider,
  type ThemeType,
  type SupportedLngsType,
  type LanguageIconListType,
  type AuthProviderType,
};
