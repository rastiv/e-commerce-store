import { Footer } from "@/shared/components/layout/Footer";
import { Header } from "@/shared/components/layout/Header";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>asd</main>
      <Footer />
    </div>
  );
};

export default HomePage;
