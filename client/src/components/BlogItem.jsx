import moment from "moment";
import { useHistory } from "react-router-dom";
import { PhotoPlaceholder } from "react-placeholder-image";

const BlogItem = (props) => {
  const history = useHistory();
  const { blog } = props;
  return (
    <div
      className="shadow-lg p-3 mb-5  rounded background-card"
      onClick={() => history.push(`/blogs/${blog._id}`)}
    >
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
