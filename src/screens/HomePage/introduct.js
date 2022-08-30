import React, { Component } from "react";
import "../../style/style_component/HomeStyle/aboutme.css";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="hehe">
          <div className="aboutme">
            <h1 className="about">ABOUT ME</h1>
            <p className="description">
              I am a A full-stack developer who works within software
              development and is knowledgeable in both the Website Development
              and App Development. I work work to create a seamless user
              experience through their diverse skill and try to show unique
              views to the audience through my design.
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <a href="#" className="work">
                Works
              </a>
              <a href="#" className="readmore">
                Read More
              </a>
            </div>
          </div>
          <div className="imgClass">
            <img
              src="https://lh5.googleusercontent.com/O32WRuRDHigriMypXZqJaXDlzkbyfFXzuLVlAYYuEjoNB3SME2QymauiXfUUIPY2-mg=w2400"
              className="img"
              alt="new"
            />
          </div>
        </div>
      </div>
    );
  }
}
