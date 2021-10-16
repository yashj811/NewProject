import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import PersonalDetails from "./screens/PersonalDetails";
import Crypto from "./screens/Crypto";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/crypto" component={Crypto} />
          <Route exact path="/personal-details" component={PersonalDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
