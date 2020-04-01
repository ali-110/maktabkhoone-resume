import React, { Component } from "react";
import Fullpage from "../components/fullpage.js";
import data from "../sectioncs.json";
import SnowStorm from "react-snowstorm";
import SkillS from "../components/skill.js";
import './skills.css'

export default class Skills extends Component {
  render() {
    return (
      <Fullpage className="skill">
        <div className="skilltitle">{data.section3.title}</div>
        <div class="skillitems">
          {data.section3.items.map(skill => {
            return <SkillS skill1={skill} />;
          })}
        </div>{" "}
        <SnowStorm className="SnowStorm" snowColor="white" />
      </Fullpage>
    );
  }
}
