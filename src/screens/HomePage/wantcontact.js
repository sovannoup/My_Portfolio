import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import GlobalStyle from "../../style/GlobleStyle.css";
import "../../style/style_component/HomeStyle/wantcontact.css";
import Carousel from "react-elastic-carousel";

import webImg from "../../assets/images/web.jpeg";
import { width } from "dom-helpers";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

export default class WantContact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="showContact">
          <h2 className="sub_head">Have a project in mind???</h2>
          <h1 className="header">LET ME HELP YOU</h1>
          <a href="/contact" className="contactBtn">
            Contact Now
          </a>
        </div>
      </div>
    );
  }
}
