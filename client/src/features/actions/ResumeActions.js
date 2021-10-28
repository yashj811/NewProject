import axios from "axios";
import { GET_RESUME_ERRORS, RESUME_LOADING } from "../constants";

export const GetBasicInfo = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: RESUME_LOADING,
      });
      const res = await axios.post(
        "https://obscure-gorge-71517.herokuapp.com/v0/register",
        data
      );
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
