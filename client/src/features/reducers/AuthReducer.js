import { REGISTER, LOGIN, AUTH_ERRORS, AUTH_LOADING } from "../constants/index";

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
        loading: false,
      };
      return Object.assign({}, state, newUser);
    case LOGIN:
      const token = action.payload.token;
      console.log(token);
      localStorage.setItem("x-auth-token", token);
      return Object.assign({}, state, { loading: false });
    case AUTH_LOADING:
      const loadingState = {
        loading: action.payload,
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
