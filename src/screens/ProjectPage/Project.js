/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../../style/style_component/ProjectStyle/mainProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import firebase from "../../firebase";
import Footer from "../Footer";
import EachProject from "./EachProject";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(6);
  }, []);

  const fetch = async (num) => {
    setProjects([]);
    await firebase.db
      .collection("t_projects")
      .limit(num)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setProjects((projects) => [...projects, doc.data()]);
        });
      });
  };

  return (
    <>
      <div className="container">
        <div className="projectHeader">
          <div className="pjHead">
            <h3 className="small">Some of my recent works</h3>
            <h1 className="big">PROJECTS</h1>
          </div>
          <div className="inputDiv">
            <input placeholder="Project Name" className="projectInput" />
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          </div>
        </div>
        <EachProject data={projects ? projects : []} />
        <div
          className="loadmoreDiv"
          onClick={async () => {
            await fetch(40);
          }}
        >
          <div className="loadMore">Load More</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
