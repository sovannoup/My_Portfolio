import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import GlobalStyle from "../../style/GlobleStyle.css";
import "../../style/style_component/HomeStyle/aboutme.css";

import webImg from "../../assets/images/web.jpeg";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="hehe">
          <div className="aboutme">
            <h1 className="about">ABOUT ME</h1>
            <p className="description">
              I am a freelance website designer and developer from Chittagong,
              Bangladesh. I create professional websites. I love art and always
              try to show unique views to the audience through my design.
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <a href="#" className="work">
                Works
              </a>
              <a href="#" className="readmore">
                Read More
              </a>
            </div>
          </div>
          <div className="imgClass">
            <img src={webImg} className="img" />
          </div>
        </div>
      </div>
    );
  }
}
