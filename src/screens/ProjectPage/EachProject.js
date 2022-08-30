import React, { Component } from "react";
import "../../style/style_component/ProjectStyle/eachProject.css";
import webImg from "../../assets/images/web.jpeg";

export default function EachProject(props) {
  return (
    <div className="ProjectContainer">
      {props.data.map((item, index) => (
        <div key={index} className="pj">
          <img src={item.imageUrl} alt="web" className="itemImg" />
          <h1 className="itemTitle">{item.title}</h1>
          <p className="itemDesc">{item.description}</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {item.skill &&
              item.skill.map((item, index) => (
                <div key={index} className="skill">
                  {item}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
