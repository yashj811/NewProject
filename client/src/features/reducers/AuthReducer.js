import { removeToken, setToken } from "../../utilities/Token";
import {
  REGISTER,
  LOGIN,
  AUTH_LOADING,
  LOGOUT,
  SET_USER,
} from "../constants/index";

const initialState = {
  user: { email: "" },
  loading: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return Object.assign({}, state, { loading: false });
    case LOGIN:
      const token = action.payload.token;
      setToken(token);
      return Object.assign({}, state, { loading: false });
    case LOGOUT:
      removeToken();

      return Object.assign({}, state, initialState);
    case SET_USER:
      const newUser = {
        user: action.payload,
        loading: false,
      };
      return Object.assign({}, state, newUser);
    case AUTH_LOADING:
      const loadingState = {
        loading: action.payload,
      };
      return Object.assign({}, state, loadingState);
    default:
      return state;
  }
};

export default AuthReducer;
