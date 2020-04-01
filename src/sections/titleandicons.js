import React, { Component } from "react";
import data from "../sectioncs.json";
import Fullpage from "../components/fullpage.js";
import { SocialIcon } from "react-social-icons";
import magic from "../images/changecolor.png";
import './titleandicons.css'

export default class Titleicons extends Component {
  state = {
    color: "blue",
    backgroundcolor: "rgb(155, 170, 255)"
  };
  changecolor = () => {
    this.setState({
      color: this.state.color === "blue" ? "#1cd11c" : "blue",
      backgroundcolor:
        this.state.backgroundcolor === "rgb(155, 170, 255)"
          ? "rgb(57, 132, 57)"
          : "rgb(155, 170, 255)"
    });
  };

  render() {
    return (
      <Fullpage className="firstbanner">
        <div className="magic">
          <img
            src={magic}
            onClick={() => {
              this.changecolor();
              document.getElementsByClassName(
                "firstbanner"
              )[0].style.background = this.state.backgroundcolor;
              document.getElementsByClassName(
                "aboutus"
              )[0].style.background = this.state.backgroundcolor;
              document.getElementsByClassName(
                "aboutus"
              )[0].style.color = this.state.color;
              document.getElementsByClassName(
                "firstbannermid"
              )[0].style.color = this.state.color;
              document.getElementsByClassName(
                "skilltitle"
              )[0].style.color = this.state.color;
              document.getElementsByClassName(
                "skill"
              )[0].style.background = this.state.backgroundcolor;
            }}
          />
        </div>
        <div className="firstbannermid">
          <div>{data.section1.title}</div>
          <div>{data.section1.midtitle}</div>
          <div>
            {Object.keys(data.section1.links).map(social => (
              <SocialIcon
                style={{ margin: "5px" }}
                url={data.section1.links[social]}
              />
            ))}
          </div>
        </div>
      </Fullpage>
    );
  }
}
