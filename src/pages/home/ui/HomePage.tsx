import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shares/config";
import { Button, Input } from "@/shares/ui";
// import GermanyIcon from "@/shares/assets/icons/German.svg?react";
import SearchIcon from "@/shares/assets/icons/Search.svg?react";

const HomePage = () => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "bg" : "en");
  };

  return (
    <>
      <h1 className={styles.title}>Home Page / {t("hello")}</h1>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <br />
      <Button form="rounded" theme="outline" onClick={changeLanguage}>
        language
      </Button>
      <br />
      <Input placeholder="Input" type="password" icon={<SearchIcon />} />
      <br />
      <Link to={"/login"}>Login Page</Link>
    </>
  );
};

export default HomePage;
