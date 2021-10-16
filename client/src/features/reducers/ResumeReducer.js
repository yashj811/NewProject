import {
  GET_BASIC_INFO,
  GET_RESUME_ERRORS,
  RESUME_LOADING,
} from "../constants/index";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  },
  error: null,
  loading: true,
};

const ResumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASIC_INFO:
      return state;
    case RESUME_LOADING:
      const loadingState = {
        loading: true,
      };
      return Object.assign({}, state, loadingState);
    case GET_RESUME_ERRORS:
      const errorState = {
        error: action.payload,
        loading: false,
      };
      return Object.assign({}, state, errorState);
    default:
      return state;
  }
};

export default ResumeReducer;
