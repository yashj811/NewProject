import axios from "axios";
import {
  BLOGS_LOADING,
  GET_BLOGS,
  SET_ERROR,
  CREATE_BLOG,
} from "../constants/index";
import { getToken } from "../../utilities/Token";
import { toast } from "react-toastify";

const config = {
  headers: {
    "x-auth-token": getToken() ?? "",
  },
};

export const PublishBlog = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: BLOGS_LOADING,
      });
      const res = await axios.post(
        "http://localhost:8080/v0/blog/create",
        data,
        config
      );

      dispatch({
        type: CREATE_BLOG,
      });
      toast.success("Published successfully !");
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  };
};

export const GetBlogs = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "http://localhost:8080/v0/blog/blogs",
        config
      );
      dispatch({
        type: BLOGS_LOADING,
      });
      dispatch({
        type: GET_BLOGS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.response.data.message,
      });
    }
  };
};
