import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.scss";
import { Header } from "@/widgets/Header";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <h1 className={styles.title}>Home Page / {t("hello")}</h1>
      <Link to={"/login"}>Login Page</Link>
    </>
  );
};

export default HomePage;
