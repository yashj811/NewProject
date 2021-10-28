import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
const Home = () => {
  return (
    <Layout>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/crypto">
        <div>Crypto</div>
      </Link>
      <Link to="/blogs">
        <div>Blogs</div>
      </Link>
      <Link to="/create-blog">
        <div>Create Blog</div>
      </Link>
      {/* <Link to="/">
        <div>Home</div>
      </Link> */}
    </Layout>
  );
};

export default Home;
