import { Link } from "react-router";

const HomePage = () => {
  return (
    <>
      <h3>Home Page</h3>
      <Link to={"/login"}>Login Page</Link>
    </>
  );
};

export default HomePage;
