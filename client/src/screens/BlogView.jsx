import { useEffect } from "react";
import moment from "moment";
import { PhotoPlaceholder } from "react-placeholder-image";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Layout from "../layouts/Layout";
import { GetBlogs } from "../features/actions/BlogActions";
import LoadingSpinner from "../components/LoadingSpinner";
import BlogItem from "../components/BlogItem";

const BlogView = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const BlogId = params.id;
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
        {!loading && blogs && (
          <div className="row justify-content-center align-itmes-center m-3">
            {" "}
            {blogs.map((item, idx) => {
              if (item._id === BlogId) {
                return (
                  <div key={idx} className="">
                    <PhotoPlaceholder
                      className="shadow p-3 mb-5 background-card rounded"
                      width={300}
                      height={300}
                    />
                    <div className="d-flex justify-content-between mt-4 my-2">
                      <div className="font-family-bold shadow p-3 mb-5 background-card rounded">
                        {item.title}
                      </div>
                      <div
                        className="shadow p-3 mb-5 background-card rounded"
                        style={{ fontSize: "12px", color: "grey" }}
                      >
                        {moment(item.createdAt).fromNow()}
                      </div>
                    </div>
                    <div className="font-family-semibold shadow p-3 mb-5 background-card rounded">
                      {" "}
                      {item.body}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
        {!loading && !blogs && <>No items found.</>}
      </>
    </Layout>
  );
};

export default BlogView;
