import { useForm } from "react-hook-form";
import Layout from "../layouts/Layout";
import BlogInput from "../components/BlogInput";
import Button from "../components/Button";

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const loading = "true";
  return (
    <Layout>
      {" "}
      <div
        className="d-flex justify-content-center align-items-center p-2 m-2"
        style={{ height: "90vh" }}
      >
        <div className="p-4 col-lg-10 col-md-10 col-sm-10 col-xs-10 ">
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
              rows={10}
              label="Body"
              error={errors.blogBody}
              register={register("blogBody", {
                required: "Body is required.",
                maxLength: {
                  value: 100,
                  message: "Max length can be 100.",
                },
              })}
            />
            <Button
              type="submit"
              text="Publish"
              classes="py-2 mx-auto w-50 d-flex align-items-center justify-content-center mt-4"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateBlog;
