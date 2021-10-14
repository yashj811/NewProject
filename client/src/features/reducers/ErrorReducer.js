import { SET_ERROR } from "../constants/index";

const initialState = {
  isError: false,
  message: "",
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      const errorState = { isError: true, message: action.payload };
      return errorState;
    default:
      return state;
  }
};

export default ErrorReducer;
