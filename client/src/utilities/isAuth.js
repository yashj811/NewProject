import { getToken } from "./Token";

const isAuth = () => {
  const token = getToken();

  if (token) {
    return true;
  } else {
    return false;
  }
};

export default isAuth;
