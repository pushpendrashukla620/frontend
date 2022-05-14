import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

// Routing

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen.js";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />

  
        </Switch>
      </div>
    </Router>
  );
};

export default App;