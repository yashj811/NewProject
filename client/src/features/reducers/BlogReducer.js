import { GET_BLOGS, CREATE_BLOG, BLOGS_LOADING } from "../constants/index";

const inititalState = {
  blogs: [],
  loading: false,
};

const BlogReducer = (state = inititalState, action) => {
  switch (action.type) {
    case CREATE_BLOG:
      return { loading: false };
    case GET_BLOGS:
      return { blogs: [...action.payload], loading: false };
    case BLOGS_LOADING:
      const loadingState = {
        loading: true,
      };
      return Object.assign({}, state, loadingState);
    default:
      return state;
  }
};

export default BlogReducer;
