import axios from "axios";
import { BLOGS_LOADING, GET_BLOGS, SET_ERROR } from "../constants/index";
import { getToken } from "../../utilities/Token";

const config = {
  headers: {
    "x-auth-token": getToken() ?? "",
  },
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
