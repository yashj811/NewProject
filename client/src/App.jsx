import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwt from "jsonwebtoken";
import PrivateRoute from "./routes/PrivateRoute";
import HandleError from "./layouts/ErrorHandler";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { SetUser } from "./features/actions/UserActions";
import { getToken } from "./utilities/Token";

import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import PersonalDetails from "./screens/PersonalDetails";
import Crypto from "./screens/Crypto";
import CreateBlog from "./screens/CreateBlog";
import Blogs from "./screens/Blogs";

const App = () => {
  const dispatch = useDispatch();
  const token = getToken();
  useEffect(() => {
    const setUserFunc = async () => {
      if (token) {
        jwt.verify(token, "yashjain121", function (err, decoded) {
          if (err) {
            return console.log(err);
          }
          dispatch(SetUser(decoded));
        });
      }
    };

    setUserFunc();
  }, [token]);
  return (
    <div className="App">
      <HandleError>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/crypto" component={Crypto} />
            <PrivateRoute
              exact
              path="/personal-details"
              component={PersonalDetails}
            />
            <PrivateRoute exact path="/create-blog" component={CreateBlog} />
            <PrivateRoute exact path="/blogs" component={Blogs} />
          </Switch>
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        />
      </HandleError>
    </div>
  );
};

export default App;
