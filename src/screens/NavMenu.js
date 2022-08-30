import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, NavLink, Redirect } from "react-router-dom";
import navBarStyle from "../style/style_component/HomeStyle/navBar.css";
import GlobalStyle from "../style/GlobleStyle.css";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: "btn",
      aboutpage: "btn",
      projectpage: "btn",
      contactpage: "btn",
    };
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { location } = this.props;
    if (nextProps.location && nextProps.location != location) {
      if (nextProps.location.pathname === "/") {
        console.log("no way");
      } else {
        // this.setState({
        // 	main_page: nextProps.location.pathname.replace(/\//g, "-"),
        // })
        console.log("ok");
      }
      this.setState({
        page: this.props.location.pathname.split("/")[1],
      });
      console.log(
        'this.props.match.url.splice("/")[1]',
        this.props.location.pathname.split("/")[1]
      );
    }
  }

  setDefault = (page) => {
    if (page === "home") {
      this.setState({ homepage: "navTxtClicked" });
    } else if (page === "about") {
      this.setState({ aboutpage: "navTxtClicked" });
    } else if (page === "project") {
      this.setState({ projectpage: "navTxtClicked" });
    } else if (page === "contact") {
      this.setState({ contactpage: "navTxtClicked" });
    }
  };
  render() {
    const { homepage, aboutpage, projectpage, contactpage } = this.state;
    return (
      <div className="container">
        <ul className="ulNav">
          <li className="liNav">
            <NavLink
              to="/home"
              role="button"
              className={homepage}
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>
          <li className="liNav">
            <NavLink
              to="/about"
              role="button"
              className={aboutpage}
              style={{ textDecoration: "none" }}
            >
              About
            </NavLink>
          </li>
          <li className="liNav">
            <NavLink
              to="/projects"
              role="button"
              className={projectpage}
              style={{ textDecoration: "none" }}
            >
              Projects
            </NavLink>
          </li>
          <li className="liNav">
            <NavLink
              to="/contact"
              role="button"
              className={contactpage}
              style={{ textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
