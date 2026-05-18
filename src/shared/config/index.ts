import {
  AuthProvider,
  AuthMethod,
  LOCAL_STORAGE_USER_KEY,
  type AuthProviderType,
  type AuthMethodType,
} from "./auth/auth";
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
  LOCAL_STORAGE_USER_KEY,
  useTheme,
  languageIconList,
  AuthProvider,
  AuthMethod,
  type ThemeType,
  type SupportedLngsType,
  type LanguageIconListType,
  type AuthProviderType,
  type AuthMethodType,
};
