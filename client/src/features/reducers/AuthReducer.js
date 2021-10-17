import { REGISTER, AUTH_ERRORS, AUTH_LOADING } from "../constants/index";

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
        loading: false,
      };
      return Object.assign({}, state, newUser);
    case AUTH_LOADING:
      const loadingState = {
        loading: true,
      };
      return Object.assign({}, state, loadingState);
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
