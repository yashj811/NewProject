import axios from "axios";
import {
  REGISTER,
  AUTH_LOADING,
  LOGIN,
  SET_ERROR,
  SET_USER,
  LOGOUT,
} from "../constants/index";

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
        type: SET_ERROR,
        payload: error.response.data,
      });
      await dispatch({
        type: AUTH_LOADING,
        payload: false,
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
        type: SET_ERROR,
        payload: error.response.data,
      });
      await dispatch({
        type: AUTH_LOADING,
        payload: false,
      });
    }
  };
};

export const SetUser = (data) => {
  return async (dispatch) => {
    await dispatch({
      type: AUTH_LOADING,
      payload: true,
    });
    await dispatch({
      type: SET_USER,
      payload: data,
    });
  };
};
export const Logout = (data) => {
  return async (dispatch) => {
    await dispatch({
      type: AUTH_LOADING,
      payload: true,
    });
    await dispatch({
      type: LOGOUT,
    });
  };
};
