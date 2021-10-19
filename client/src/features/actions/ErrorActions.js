import { CLEAR_ERROR } from "../constants";

export const ClearError = () => {
  return async (dispatch) => {
    await dispatch({
      type: CLEAR_ERROR,
    });
  };
};
