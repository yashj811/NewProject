import axios from "axios";
import { REGISTER, AUTH_LOADING, AUTH_ERRORS } from "../constants/index";

export const RegisterUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/v0/register", data);
      dispatch({
        type: AUTH_LOADING,
      });
      dispatch({
        type: REGISTER,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERRORS,
        payload: error.response.data,
      });
    }
  };
};
