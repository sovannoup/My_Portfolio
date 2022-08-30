import React, { Component, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import GlobalStyle from "../../style/GlobleStyle.css";
import "../../style/style_component/AboutStyle/skill.css";

import WantContact from "../HomePage/wantcontact";

const createHistory = require("history").createBrowserHistory;
const history = createHistory();

export default function Skill(props) {

  return (
    <div className="education">
      {props.education && (
        <div className="onePack">
          <h1 className="skillHeader">EDUCATION</h1>
          <div className="eachrow">
            <h4 className="skTitle">School</h4>
            <p className="skillInfo">{props.education.school}</p>
          </div>
          <div className="eachrow">
            <h4 className="skTitle">College</h4>
            <p className="skillInfo">{props.education.college}</p>
          </div>
        </div>
      )}

      {props.skill && (
        <div className="onePack">
          <h1 className="skillHeader">MY SKILLS</h1>
          <div className="eachrow">
            <h4 className="skTitle">Frontend</h4>
            {props.skill.frontend.map((item, index) => (
              <p key={index} className="skillInfo">
                {item}
              </p>
            ))}
          </div>
          <div className="eachrow">
            <h4 className="skTitle">Backend</h4>
            {props.skill.backend.map((item, index) => (
              <p key={index} className="skillInfo">
                {item}
              </p>
            ))}
          </div>
          <div className="eachrow">
            <h4 className="skTitle">DATABASE</h4>
            {props.skill.database.map((item, index) => (
              <p key={index} className="skillInfo">
                {item}
              </p>
            ))}
          </div>
          <div className="eachrow">
            <h4 className="skTitle">TECHNOLOGY</h4>
            {props.skill.technology.map((item, index) => (
              <p key={index} className="skillInfo">
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

      {props.exp && (
        <div className="onePack">
          <h1 className="skillHeader">EXPERIENCES</h1>
          {props.exp.map((data, index) => {
            return (
              <div className="eachrow" key={index}>
                <h4 className="skTitle">{data.from}</h4>
                <p className="skillInfo">{data.position}</p>
              </div>
            );
          })}
        </div>
      )}
      <WantContact />
    </div>
  );
}
