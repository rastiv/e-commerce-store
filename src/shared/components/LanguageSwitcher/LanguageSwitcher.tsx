import { useTranslation } from "react-i18next";

import { languageIconList, type SupportedLngsType } from "@/shared/config";
import { AppIcon, Button } from "@/shared/components/ui";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const rawLanguage = i18n.resolvedLanguage || i18n.language || "en";
  const currentLanguage = rawLanguage.slice(0, 2) as SupportedLngsType;

  const toggleLanguage = () => {
    const nextLang = currentLanguage === "en" ? "bg" : "en";
    i18n.changeLanguage(nextLang);
  };

  const TargetIcon =
    languageIconList[currentLanguage] || languageIconList["en"];

  return (
    <Button theme="ghost" onClick={toggleLanguage}>
      <AppIcon Icon={TargetIcon} />
    </Button>
  );
};

export default LanguageSwitcher;
