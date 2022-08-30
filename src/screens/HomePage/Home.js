import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import GlobalStyle from "../../style/GlobleStyle.css";
import Welcome from "./welcome";
import Introduce from "./introduct";
import Service from "./Service";
import Projects from "./Project";
import Feedback from "./Feedback";
import Wantcontact from "./wantcontact";

import Footer from "../Footer";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps, nextState) {}
  render() {
    return (
      <>
        <div className="container">
          <Welcome />
          <Introduce />
          <Service />
          <Projects />
          <Feedback />
          <Wantcontact />
        </div>
        <Footer />
      </>
    );
  }
}
