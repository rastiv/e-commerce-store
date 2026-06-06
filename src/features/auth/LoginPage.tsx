import { useAppSelector } from "@/app/store";
import { routePaths } from "@/shared/config";

import { LoginForm } from "./LoginForm";
import styles from "./LoginPage.module.scss";
import { selectIsAuth } from "./store/authSlice";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();

  if (isAuth) {
    navigate(routePaths.home);
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
