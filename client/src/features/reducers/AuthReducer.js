import {
  REGISTER,
  AUTH_ERRORS,
  SET_AUTH_LOADING,
  UNSET_AUTH_LOADING,
} from "../constants/index";

const initialState = {
  user: { email: "", password: "" },
  error: null,
  loading: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      const newUser = {
        user: action.payload.data,
        error: null,
      };
      return Object.assign({}, state, newUser);
    case SET_AUTH_LOADING:
      const loadingState = {
        loading: true,
      };
      return Object.assign({}, state, loadingState);
    case UNSET_AUTH_LOADING:
      const unsetLoadingState = {
        loading: false,
      };
      return Object.assign({}, state, unsetLoadingState);
    case AUTH_ERRORS:
      const errorState = {
        error: action.payload,
        loading: false,
      };
      return Object.assign({}, state, errorState);
    default:
      return state;
  }
};

export default AuthReducer;
