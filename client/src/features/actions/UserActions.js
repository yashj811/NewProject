import axios from "axios";
import { REGISTER, AUTH_LOADING, AUTH_ERRORS, LOGIN } from "../constants/index";

export const RegisterUser = (data) => {
  return async (dispatch) => {
    await dispatch({
      type: AUTH_LOADING,
      payload: true,
    });
    try {
      const res = await axios.post("http://localhost:8080/v0/register", data);

      await dispatch({
        type: REGISTER,
        payload: res.data.data,
      });
    } catch (error) {
      await dispatch({
        type: AUTH_ERRORS,
        payload: error.response.data,
      });
    }
  };
};

export const LoginUser = (data) => {
  return async (dispatch) => {
    await dispatch({
      type: AUTH_LOADING,
      payload: true,
    });
    try {
      const res = await axios.post("http://localhost:8080/v0/login", data);
      await dispatch({
        type: LOGIN,
        payload: res.data.data,
      });
    } catch (error) {
      await dispatch({
        type: AUTH_ERRORS,
        payload: error.response.data,
      });
    }
  };
};
