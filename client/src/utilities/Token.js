const getToken = () => localStorage.getItem("x-auth-token");
const setToken = (token) => localStorage.setItem("x-auth-token", token);
const removeToken = () => localStorage.removeItem("x-auth-token");

export { getToken, setToken, removeToken };
