import axios from "axios";
import { CRYPTO_LOADING, GET_CRYPTO, SET_ERROR } from "../constants/index";
import { getToken } from "../../utilities/Token";

const config = {
  headers: {
    "x-auth-token": getToken() ?? "",
  },
};

export const GetCrypto = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8080/v0/crypto", config);
      dispatch({
        type: CRYPTO_LOADING,
      });
      dispatch({
        type: GET_CRYPTO,
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
