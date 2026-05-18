import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import UsersIcon from "@/shared/assets/icons/Users.svg?react";
import { routePaths } from "@/shared/config";
import { Button, Input, AppIcon } from "@/shared/ui";

import styles from "./Header.module.scss";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const { t } = useTranslation(["common", "auth"]);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(routePaths.login);
  };

  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <LogoIcon className={styles.logo} />
        <Button theme="secondary">
          <AppIcon Icon={MapPin} />
          <span>{t("companyAddress")}</span>
        </Button>
      </div>
      <div className={styles.section}>
        <Input
          placeholder={t("searchBy")}
          icon={<AppIcon Icon={SearchIcon} size={18} theme="background" />}
          rounded
        />
      </div>
      <div className={styles.section}>
        <Button theme="secondary">{t("cart")}</Button>
        <Button theme="outline" onClick={handleLoginClick}>
          <AppIcon Icon={UsersIcon} />
          <span>{t("auth:login")}</span>
        </Button>

        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
