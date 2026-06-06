import type { ParseKeys } from "i18next";
import { useTranslation } from "react-i18next";
import { getErrorCode } from "../utils";

export const useCodeTranslation = () => {
  const { t } = useTranslation("codes");

  const translateCode = (error: string | unknown): string => {
    const key = typeof error === "string" ? error : getErrorCode(error);

    if (!key) return t("UNKNOWN_ERROR" as ParseKeys<"codes">);

    return t(key as ParseKeys<"codes">);
  };

  return { tc: translateCode };
};
