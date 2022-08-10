import React from "react";
import Main from "./Main/Main.jsx";
import Login from "./Login_Register/Login.jsx";
import Register from "./Login_Register/Register.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Main} />
        </Switch>
    </Router>
  );
}

export default App;
