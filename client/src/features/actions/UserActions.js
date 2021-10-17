import axios from "axios";
import {
  REGISTER,
  SET_AUTH_LOADING,
  UNSET_AUTH_LOADING,
  AUTH_ERRORS,
} from "../constants/index";

export const RegisterUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/v0/register", data);
      dispatch({
        type: SET_AUTH_LOADING,
      });
      await dispatch({
        type: REGISTER,
        payload: res.data.data,
      });
      dispatch({
        type: UNSET_AUTH_LOADING,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERRORS,
        payload: error.response.data,
      });
    }
  };
};
