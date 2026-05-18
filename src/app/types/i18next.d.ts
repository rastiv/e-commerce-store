import "i18next";
import * as en from "../i18n/locales/en";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof en;
  }
}
