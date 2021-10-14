import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ErrorReducer from "./ErrorReducer";

const reducers = combineReducers({
  user: AuthReducer,
  error: ErrorReducer,
});

export default reducers;
