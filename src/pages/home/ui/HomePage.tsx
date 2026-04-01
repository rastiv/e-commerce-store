import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import styles from "./HomePage.module.scss";
import { Spinner } from "@/shares/ui";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <Spinner />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
