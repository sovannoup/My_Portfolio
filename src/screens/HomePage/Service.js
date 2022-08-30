import React, { Component, useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import GlobalStyle from "../../style/GlobleStyle.css";
import "../../style/style_component/HomeStyle/service.css";
import firebase from "../../firebase";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

export default function HomePage(props) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const [services, setService] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await firebase.db
        .collection("t_service")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            console.log("Hiiii", doc.data().services);
            setService(doc.data().services);
          });
        });
    };
    fetch();
  }, []);

  return (
    <div className="container">
      <div className="service">
        <h1 className="header">AVAILABLE SERVICES</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
          className="hoho"
        >
          <Carousel
            itemsToShow={width > 1024 ? 3 : width > 670 ? 2 : 1}
            initialActiveIndex={0}
            showArrows={false}
            itemsToScroll={2}
          >
            {services.map((data, index) => {
              return (
                <div className="boxService" key={index}>
                  <p className="hoho">{data.icon}</p>
                  <p className="serviceSub">{data.title}</p>
                  <p className="desc">{data.description}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
