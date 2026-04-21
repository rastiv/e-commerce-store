import type { FunctionComponent, SVGProps } from "react";

import type { supportedLngs } from "./i18n";

import BulgariaIcon from "@/shares/assets/icons/Bulgaria.svg?react";
import EnglishIcon from "@/shares/assets/icons/English.svg?react";

export type SupportedLngsType = (typeof supportedLngs)[number];

export type LanguageIconListType = Record<
  SupportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconListType = {
  en: EnglishIcon,
  bg: BulgariaIcon,
};
