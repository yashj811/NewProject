import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Login from "./screens/Login";
import PersonalDetails from "./screens/PersonalDetails";
import Crypto from "./screens/Crypto";

import "./App.css";
import HandleError from "./layouts/ErrorHandler";

function App() {
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
          </Switch>
        </Router>
      </HandleError>
    </div>
  );
}

export default App;
