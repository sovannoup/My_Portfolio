import React, { Component, useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import GlobalStyle from "../../style/GlobleStyle.css";
import "../../style/style_component/HomeStyle/feedback.css";
import Carousel from "react-elastic-carousel";
import firebase from "../../firebase";

import webImg from "../../assets/images/web.jpeg";
import { width } from "dom-helpers";

const createHistory = require("history").createBrowserHistory;;
const history = createHistory();;

const list = [
  {
    name: "Fedison",
    role: "Developer",
    desc: "Your work output is great. user friendly with smooth data loading.",
  },
  {
    name: "Jeson",
    role: "UI/UX",
    desc: "Your work output is great. user friendly with smooth data loading.",
  },
  {
    name: "Devith",
    role: "CEO",
    desc: "Your work output is great. user friendly with smooth data loading.",
  },
  {
    name: "Sombath",
    role: "Web  Developer",
    desc: "Your work output is great. user friendly with smooth data loading.",
  },
  {
    name: "Nika",
    role: "Investor",
    desc: "Your work output is great. user friendly with smooth data loading.",
  },
];

export default function Feedback() {
  const width = window.innerWidth;
  const [feedbacks, setFeedback] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await firebase.db
        .collection("t_feedback")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            setFeedback(doc.data().feedbacks);
          });
        });
    };
    fetch();
  }, []);

  return (
    <div className="container">
      <div className="feedback">
        <h1 className="header">CLIENTS FEEDBACK</h1>
        <Carousel
          itemsToShow={width > 670 ? 2 : 1}
          initialActiveIndex={0}
          showArrows={false}
          itemsToScroll={2}
        >
          {feedbacks.map((item, index) => (
            <div key={index} className="feedbackItem">
              <h1 className="feedbackTitle">Feedback</h1>
              <p className="feedbackDesc">{item.description}</p>
              <h2 className="from">
                From : {item.from} / {item.position}
              </h2>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
