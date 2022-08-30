/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "../../style/style_component/AboutStyle/myinfo.css";
import img from "../../assets/images/2.jpg";

export default class myInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="myInfo">
        <div className="first">
          <h2 className="hello">Hello, I'm Noup Sovan</h2>
          <h1 className="myJob">A Freelance Web Developer</h1>
          <div className="oneParag">
            <p className="descc">
              I started coding since I was in high school. Coding is also an art
              for me. I love it and now I have the opportunity to design along
              with the coding. I find it really interesting and I enjoyed the
              process a lot.
            </p>
          </div>
          <div className="oneParag">
            <p className="descc">
              My vision is to make the world a better place. Now almost
              everything is becoming better than ever. It is time for us to
              create more good stuff that helps the world to become a better
              place.
            </p>
          </div>
          <div className="oneParag">
            <p className="descc">
              My vision is to make the world a better place. Now almost
              everything is becoming better than ever. It is time for us to
              create more good stuff that helps the world to become a better
              place.
            </p>
          </div>
          <div style={{ marginTop: 50 }}>
            <a href="/contact" className="conbtn">
              Contact Now
            </a>
          </div>
        </div>
        <div className="second">
          <img
            src="https://lh3.googleusercontent.com/LVA4d7o5ZUHxNXi01sYqybEco3aWB6UHQW6EQuo6K0f0UOlILeC7M7e0DFq9_pnMmBk=w2400"
            className="balbla"
          />
        </div>
      </div>
    );
  }
}
