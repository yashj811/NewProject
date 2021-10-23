import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ErrorReducer from "./ErrorReducer";
import CryptoReducer from "./CryptoReducer";
import ResumeReducer from "./ResumeReducer";
import BlogReducer from "./BlogReducer";

const reducers = combineReducers({
  auth: AuthReducer,
  error: ErrorReducer,
  crypto: CryptoReducer,
  resume: ResumeReducer,
  blogs: BlogReducer,
});

export default reducers;
