import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layouts/Layout";
import { GetBlogs } from "../features/actions/BlogActions";
import LoadingSpinner from "../components/LoadingSpinner";
import BlogItem from "../components/BlogItem";

const Blogs = () => {
  const dispatch = useDispatch();
  const { loading, blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    const getAllBlogs = () => {
      dispatch(GetBlogs());
    };
    getAllBlogs();
  }, []);
  return (
    <Layout>
      <>
        {loading && <LoadingSpinner />}
        {!loading && blogs ? (
          <div className="row justify-content-center align-itmes-center m-3">
            {" "}
            {blogs.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="d-flex col-xs-12 col-sm-12 col-md-4 col-lg-5 col-xl-3 mx-2 p-2 h6"
                >
                  <BlogItem blog={item} />
                </div>
              );
            })}
          </div>
        ) : (
          "No items found."
        )}
      </>
    </Layout>
  );
};

export default Blogs;
