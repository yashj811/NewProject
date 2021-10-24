import { PhotoPlaceholder } from "react-placeholder-image";
import moment from "moment";

const BlogItem = (props) => {
  const { blog } = props;
  return (
    <div className="">
      <PhotoPlaceholder width={300} height={300} />
      <div className="d-flex justify-content-between  mt-2">
        <div className="">{blog.title}</div>
        <div style={{ fontSize: "12px", color: "grey" }}>
          {moment(blog.createdAt).fromNow()}
        </div>
      </div>
      {/* <div>{blog.body}</div> */}
    </div>
  );
};

export default BlogItem;
