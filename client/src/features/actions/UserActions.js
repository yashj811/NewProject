import axios from "axios";
import { REGISTER, SET_ERROR } from "../constants/index";

export const RegisterUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/v0/register", data);
      dispatch({
        type: REGISTER,
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
