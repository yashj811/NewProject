import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwt from "jsonwebtoken";
import PrivateRoute from "./routes/PrivateRoute";
import HandleError from "./layouts/ErrorHandler";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import SetUserFunc from "./utilities/setUser";

import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import PersonalDetails from "./screens/PersonalDetails";
import Crypto from "./screens/Crypto";
import CreateBlog from "./screens/CreateBlog";
import Blogs from "./screens/Blogs";
import BlogView from "./screens/BlogView";

const App = () => {
  useEffect(() => {
    SetUserFunc();
  }, []);
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
            <PrivateRoute exact path="/blogs/:id" component={BlogView} />
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
