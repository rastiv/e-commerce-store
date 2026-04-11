import { useState } from "react";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Button } from "@/shares/ui";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("An error occurred!");
  }

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <Button onClick={() => setHasError(true)}>Toggle Error</Button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
