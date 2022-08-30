import React, { useEffect, useState } from "react";
import MyInfo from "./myInfo";
import Skill from "./skill";
import firebase from "../../firebase";
import Footer from "../Footer";

export default function About() {
  const [education, setEducation] = useState();
  const [exp, setExp] = useState();
  const [skill, setSkill] = useState();

  useEffect(() => {
    const fetch = async () => {
      await firebase.db
        .collection("t_about")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            setEducation(doc.data().education[0].education);
            setExp(doc.data().education[0].experience);
            setSkill(doc.data().education[0].skill);
          });
        });
    };
    fetch();
  }, []);

  return (
    <>
      <div className="container">
        <MyInfo />
        <Skill education={education} exp={exp} skill={skill} />
      </div>
      <Footer />
    </>
  );
}
