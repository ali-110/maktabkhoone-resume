import React, { Component } from "react";
import Fullpage from "../components/fullpage.js";
import data from "../sectioncs.json";
import './aboutus.css'

export default class Aboutus extends Component {
                 render() {
                   return (
                     <Fullpage className="aboutus">
                       <div>{data.section2.title}</div>
                       <div>{data.section2.midtitle}</div>
                     </Fullpage>
                   );
                 }
               }
