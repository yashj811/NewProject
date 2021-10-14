import { REGISTER, LOGIN } from "../constants/index";

const initialState = {
  email: "",
  password: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default AuthReducer;
