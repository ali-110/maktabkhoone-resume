import React, { Component } from "react";
import './skill.css'

export default class Skill extends Component {
  render() {
    const { skill1 } = this.props;
    return (
      <div>
        <div className="skills">
          <img src={skill1.logo} />
          <div>{skill1.title}</div>
        </div>
      </div>
    );
  }
}
