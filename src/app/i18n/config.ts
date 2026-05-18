import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import * as bg from "./locales/bg";
import * as en from "./locales/en";

export const supportedLngs = ["en", "bg"] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      bg,
    },
    ns: Object.keys(en),
    fallbackLng: "en",
    defaultNS: "common",
    // debug: import.meta.env.MODE === "development",
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
