import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shares/config";

const HomePage = () => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "bg" : "en");
  };

  return (
    <>
      <h1 className={styles.title}>Home Page / {t("hello")}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={changeLanguage}>{i18n.language}</button>
      <Link to={"/login"}>Login Page</Link>
    </>
  );
};

export default HomePage;
