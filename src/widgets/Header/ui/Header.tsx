import { LogOut, MapPin, Search, User } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { logout } from "@/features/login/model/services/logout";

import { selectUser } from "@/entities/user";

import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import { routePaths } from "@/shared/config";
import {
  useAppDispatch,
  useAppSelector,
  useCodeTranslation,
} from "@/shared/libs";
import { Button, Input, AppIcon, useToast } from "@/shared/ui";

import styles from "./Header.module.scss";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { t } = useTranslation(["common", "auth"]);
  const { tc } = useCodeTranslation();

  const user = useAppSelector(selectUser);

  const handleLoginClick = () => {
    navigate(routePaths.login);
  };

  const handleLogoutClick = async () => {
    setIsLoading(true);
    try {
      const result = await dispatch(
        logout({ rejectValue: "LOGOUT_FAILED" }),
      ).unwrap();
      addToast({
        message: tc(result.code),
        status: "success",
      });
      navigate(routePaths.home);
    } catch (errorKey) {
      if (errorKey === "ALREADY_LOGGED_IN") {
        navigate(routePaths.home);
        return;
      }
      addToast({
        message: tc(errorKey),
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
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

      <Input
        placeholder={t("searchBy")}
        icon={<AppIcon Icon={Search} size={18} theme="background" />}
        className={styles.searchInput}
        rounded
      />

      <div className={styles.section}>
        <Button theme="secondary">{t("cart")}</Button>
        {user ? (
          <Button
            theme="outline"
            onClick={handleLogoutClick}
            disabled={isLoading}
          >
            <AppIcon Icon={LogOut} />
            <span>{t("auth:logout")}</span>
          </Button>
        ) : (
          <Button theme="outline" onClick={handleLoginClick}>
            <AppIcon Icon={User} />
            <span>{t("auth:login")}</span>
          </Button>
        )}

        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
