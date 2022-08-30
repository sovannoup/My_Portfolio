import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import GlobalStyle from "../style/GlobleStyle.css";
import "../style/footer.css";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <div className="subFooter" style={{ display: "flex", lineHeight: 2 }}>
          <div className="infoClass">
            <h1 className="footerName">NOUP SOVAN</h1>
            <p className="info">
              A freelance web designer and developer from Cambodia. I always
              make websites that have unique designsand also has a good
              performance rate. I always make websites that have unique
              designsand also has a good performance rate.
            </p>
          </div>
          <div className="eachClass">
            <h2 className="footerhead">Contact Info</h2>
            <p className="contactInfo">+855964794954</p>
            <p className="contactInfo">noupsovan18@gmail.com</p>
            <p className="contactInfo">Takeo, Cambodia</p>
          </div>
          <div className="eachClass">
            <h2 className="footerhead">Social Links</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a href="#" className="linkSocial">
                Facebook
              </a>
              <a href="#" className="linkSocial">
                Linkin
              </a>
              <a href="#" className="linkSocial">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
