import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layouts/Layout";
import { GetBlogs } from "../features/actions/BlogActions";
import LoadingSpinner from "../components/LoadingSpinner";

const Blogs = () => {
  const dispatch = useDispatch();
  const { loading, blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    const getAllBlogs = async () => {
      await dispatch(GetBlogs());
    };
    getAllBlogs();
  }, []);
  return (
    <Layout>
      {loading ? <div>Loading.. </div> : blogs ? JSON.stringify(blogs) : ""}
    </Layout>
  );
};

export default Blogs;
