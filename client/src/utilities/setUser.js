import jwt from "jsonwebtoken";
import store from "../store";
import { SetUser } from "../features/actions/UserActions";
import { getToken } from "./Token";
const SetUserFunc = async () => {
  const token = getToken();

  if (token) {
    jwt.verify(token, "yashjain121", function (err, decoded) {
      if (err) {
        return console.log(err);
      }
      store.dispatch(SetUser(decoded));
    });
  }
};

export default SetUserFunc;
