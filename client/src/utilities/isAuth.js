const isAuth = () => {
  const token = localStorage.getItem("x-auth-token");

  if (token) {
    return true;
  } else {
    return false;
  }
};

export default isAuth;
