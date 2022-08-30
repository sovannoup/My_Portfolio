import React, { Component, useEffect, useState } from "react";
import "../../style/style_component/HomeStyle/project.css";
import Carousel from "react-elastic-carousel";
import webImg from "../../assets/images/web.jpeg";
import firebase from "../../firebase";

export default function Project(props) {
  const [projects, setProjects] = useState([]);
  const width = window.innerWidth;

  useEffect(() => {
    const fetch = async () => {
      await firebase.db
        .collection("t_projects")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            setProjects((projects) => [...projects, doc.data()]);
          });
        });
    };
    fetch();
  }, []);

  return (
    <div className="project">
      <h1 className="title">PROJECTS</h1>
      <Carousel
        itemsToShow={width > 1024 ? 3 : width > 670 ? 2 : 1}
        initialActiveIndex={0}
        showArrows={false}
        itemsToScroll={2}
      >
        {projects.map((item, index) => (
          <div key={index} className="item">
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
              {item.skill.map((item, index) => (
                <div key={index} className="skill">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
