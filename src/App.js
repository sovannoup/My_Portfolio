import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { APP_REFRESH } from "./modules/app/reducer";

import PageNotFoundComponent from "./screens/PageNotFound";
import Metatages from "./screens/metatages";
import { store } from "./store";
import auth from "./firebase";
import Home from "./screens/HomePage/Home";
import About from "./screens/AboutPage/About";
import Navbar from "./screens/NavMenu";
import Project from "./screens/ProjectPage/Project";
import Contact from "./screens/ContactPage/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        store.dispatch({ type: APP_REFRESH });
      }
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Route component={Metatages} />
          <Navbar />
          <Switch>
            <Route exact path="My_Portfolio/" render={() => <Redirect to="/home" />} />
            <Route exact path="My_Portfolio/home" component={Home} />
            <Route exact path="My_Portfolio/about" component={About} />
            <Route exact path="My_Portfolio/projects" component={Project} />
            <Route exact path="My_Portfolio/contact" component={Contact} />
            <Route component={PageNotFoundComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
