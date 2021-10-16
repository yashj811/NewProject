import axios from "axios";
import { GET_BASIC_INFO, GET_RESUME_ERRORS } from "../constants";

export const GetBasicInfo = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/v0/register", data);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: GET_RESUME_ERRORS,
        payload: error.response.data,
      });
    }
  };
};
