import { SET_ERROR, CLEAR_ERROR } from "../constants/index";

const initialState = {
  error: null,
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      const errorState = { error: action.payload };
      return errorState;
    case CLEAR_ERROR:
      const errorNull = {
        error: null,
      };
      return Object.assign({}, state, errorNull);
    default:
      return state;
  }
};

export default ErrorReducer;
