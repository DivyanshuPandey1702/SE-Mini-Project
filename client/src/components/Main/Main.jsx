import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Header from "../Header/Header.jsx";
import Home from "./Home.jsx";
import Profile from "./Profile.jsx";
import Messenger from "./Messenger.jsx";
import SavedPost from "./SavedPost.jsx";
import EditProfile from "./EditProfile";

function Main() {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/messenger" component={Messenger} />
              <Route path="/editprofile" component={EditProfile} />
              <Route path="/saved" component={SavedPost} />
            </Switch>
          </Router>
      </Container>
    </div>
  );
}

export default Main;
