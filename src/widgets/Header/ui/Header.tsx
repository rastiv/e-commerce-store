import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import styles from "./Header.module.scss";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

import LogoIcon from "@/shares/assets/icons/Logo.svg?react";
import MapPin from "@/shares/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shares/assets/icons/Search.svg?react";
import UsersIcon from "@/shares/assets/icons/Users.svg?react";
import { routePaths } from "@/shares/config";
import { Button, Input, AppIcon } from "@/shares/ui";


const Header = () => {
  const { t } = useTranslation();
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
          <span>{t("header.address")}</span>
        </Button>
      </div>
      <div className={styles.section}>
        <Input
          placeholder={t("header.searchBy")}
          icon={<AppIcon Icon={SearchIcon} size={18} theme="background" />}
          rounded
        />
      </div>
      <div className={styles.section}>
        <Button theme="secondary">{t("header.cart")}</Button>
        <Button theme="outline" onClick={handleLoginClick}>
          <AppIcon Icon={UsersIcon} />
          <span>{t("header.login")}</span>
        </Button>

        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
