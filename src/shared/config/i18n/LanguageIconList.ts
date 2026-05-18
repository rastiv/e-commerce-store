import type { FunctionComponent, SVGProps } from "react";

import type { supportedLngs } from "@/app/i18n/config";

import BulgariaIcon from "@/shared/assets/icons/Bulgaria.svg?react";
import EnglishIcon from "@/shared/assets/icons/English.svg?react";

export type SupportedLngsType = (typeof supportedLngs)[number];

export type LanguageIconListType = Record<
  SupportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageIconList: LanguageIconListType = {
  en: EnglishIcon,
  bg: BulgariaIcon,
};
