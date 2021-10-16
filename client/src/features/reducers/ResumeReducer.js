import { GET_BASIC_INFO, GET_RESUME_ERRORS } from "../constants/index";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  },
  error: null,
};

const ResumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASIC_INFO:
      return state;
    case GET_RESUME_ERRORS:
      const errorState = {
        error: action.payload,
      };
      return Object.assign({}, state, errorState);
    default:
      return state;
  }
};

export default ResumeReducer;
