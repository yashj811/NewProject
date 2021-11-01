import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Logout } from "../features/actions/UserActions";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(Logout());
    history.push("/");
  };
  return (
    <div>
      <>
        <nav
          className="navbar "
          style={{ backgroundColor: "whitesmoke", color: "#0066b2" }}
        >
          <div className="container-fluid">
            <Link to="/">
              <span className="navbar-brand mb-0 h1">Home</span>
            </Link>
            <div className="d-flex align-items-center justify-content-center ">
              {!user.email && (
                <Link to="/login">
                  <div className="nav-item  px-2">Login </div>
                </Link>
              )}
              {!user.email && (
                <Link to="/register">
                  <div className="nav-item  px-2">Register </div>
                </Link>
              )}
              {user.email && (
                <div className="nav-item  px-2" onClick={handleLogout}>
                  Logout{" "}
                </div>
              )}
              <Avatar name={user.username} size={35} round={true} />
            </div>
          </div>
        </nav>
        <div className="">{children}</div>
      </>
    </div>
  );
};

export default Layout;
