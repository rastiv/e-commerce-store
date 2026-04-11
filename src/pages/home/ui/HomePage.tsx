import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <Footer />
    </div>
  );
};

export default HomePage;
