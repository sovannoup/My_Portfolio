import React, { Component } from "react";
import "../../style/style_component/HomeStyle/welcome.css";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps, nextState) {}
  render() {
    return (
      <div className="welcomeContainer">
        <div className="hehe">
          <div className="body">
            <h1 className="welcome">I'm SOVAN NOUP,</h1>
            <h2 className="job">A Software Developer</h2>
            <p className="bbbbb">
              I am a full stack web developer with a Bachelor degree in Software
              Engineering from Kirirom Institute of Technology.
            </p>
            <p className="bbbbb">
              An enthusiastic individual who is always willing to do what he is
              tasked to do as efficiently as possible with perfection. My
              objective is to soar high in this competitive technology industry.
            </p>
          </div>
          <div className="imgDiv">
            <img
              src="https://lh4.googleusercontent.com/bwr3h7Nwt2bP2n2vtow9E9qPaClR3Wg-41vRcaNjckdthnFRa3dgqws5rcmzVRmjZqc=w2400"
              className="myImg"
              alt="MainImage"
            />
          </div>
        </div>
      </div>
    );
  }
}
