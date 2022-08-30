import React, { Component, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import GlobalStyle from "../../style/GlobleStyle.css";
import "../../style/style_component/ContactStyle/contactForm.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const createHistory = require("history").createBrowserHistory;;
const history = createHistory();;

export default function contactForm(props) {
  return (
    <div className="contactContainer">
      <div className="left">
        <div className="eachContact">
          <div className="circleIcon">
            <FontAwesomeIcon icon={faPhone} className="iconnn" />
          </div>
          <p className="phoneNum">+855964794954</p>
        </div>
        <div className="eachContact">
          <div className="circleIcon">
            <FontAwesomeIcon icon={faMailBulk} className="iconnn" />
          </div>
          <p className="phoneNum">noupsovan18@gmail.com</p>
        </div>
        <div className="eachContact">
          <div className="circleIcon">
            <h1 className="fLogo">f</h1>
          </div>
          <p className="phoneNum">Noup Sovan</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="right">
        <h4 className="titleInput">Your Name</h4>
        <input
          placeholder="Enter your name"
          className="userInput"
          value={props.name}
          onChange={(e) => {
            props.changeName(e.target.value);
          }}
        />
        <h4 className="titleInput">Your Email</h4>
        <input
          placeholder="Enter your email"
          className="userInput"
          value={props.email}
          onChange={(e) => {
            props.changeEmail(e.target.value);
          }}
        />
        <h4 className="titleInput">Your Message</h4>
        <textarea
          placeholder="Messages"
          className="messageInput"
          value={props.text}
          onChange={(e) => {
            props.changeText(e.target.value);
          }}
        />
        <div className="submitBtn">
          <div
            className="submit"
            onClick={() => {
              props.sendMessage();
            }}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}
