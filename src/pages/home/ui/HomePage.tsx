import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shares/config";

const HomePage = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/login"}>Login Page</Link>
    </>
  );
};

export default HomePage;
