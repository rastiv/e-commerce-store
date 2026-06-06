import {
  AuthProvider,
  AuthMethod,
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

const API_URL = "http://localhost:3005";
const IS_DEV = import.meta.env.MODE === "development";

export {
  routePaths,
  AppRouter,
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  useTheme,
  languageIconList,
  AuthProvider,
  AuthMethod,
  API_URL,
  IS_DEV,
  type ThemeType,
  type SupportedLngsType,
  type LanguageIconListType,
  type AuthProviderType,
  type AuthMethodType,
};
