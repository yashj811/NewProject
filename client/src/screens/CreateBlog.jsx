import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import BlogInput from "../components/BlogInput";
import Button from "../components/Button";
import { PublishBlog } from "../features/actions/BlogActions";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { loading } = useSelector((state) => state.blogs);

  const onSubmit = async (data) => {
    const newBlog = { blogTitle: data.blogTitle, blogBody: data.blogBody };
    await dispatch(PublishBlog(newBlog));
    reset();
  };

  return (
    <Layout>
      {" "}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="col-12 col-lg-6 p-4 mx-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <BlogInput
              name="blogtitle"
              type="text"
              label="Title"
              error={errors.blogTitle}
              register={register("blogTitle", {
                required: "Title is required.",
                maxLength: {
                  value: 50,
                  message: "Max length can be 50.",
                },
              })}
            />
            <BlogInput
              name="blogbody"
              type="text"
              as="textarea"
              rows={12}
              label="Body"
              error={errors.blogBody}
              register={register("blogBody", {
                required: "Body is required.",
                maxLength: {
                  value: 2000,
                  message: "Max length exceeded.",
                },
              })}
            />
            <Button
              type="submit"
              text="Publish"
              classes="py-2 mx-auto d-flex align-items-center justify-content-center mt-4 col-12 col-lg-2 col-md-2"
              disabled={loading}
              loading={loading}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateBlog;
