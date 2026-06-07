import { Outlet } from "react-router";
import { Header } from "../Header";
import { Footer } from "../Footer";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <main className={styles.appContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
