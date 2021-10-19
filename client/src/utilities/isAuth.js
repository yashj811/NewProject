import getToken from "./getToken";

const isAuth = () => {
  const token = getToken();

  if (token) {
    return true;
  } else {
    return false;
  }
};

export default isAuth;
