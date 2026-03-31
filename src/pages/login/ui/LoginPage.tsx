import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const LoginPage = () => {
  const { t } = useTranslation("login");

  return (
    <>
      <h3>Login Page</h3>
      <Link to={"/"}>{t("login")}</Link>
    </>
  );
};

export default LoginPage;
