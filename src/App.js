import React from 'react';
import Titleicons from './sections/titleandicons.js'
import Aboutus from './sections/aboutus.js'
import Skills from './sections/skills.js'
import { Link, Element} from 'react-scroll'
import data from './sectioncs.json'
import down from './images/down.png'



import './App.css';


function App() {


  return (
    <div className="App">
      <div className="topmenu">
        <div className="menubar">
          <div>
            <Link
              activeClass="active"
              to="aboutus"
              smooth={true}
              duration={1000}
              delay={100}
            >
              {data.header.links.about}
            </Link>
          </div>{" "}
          <div>
            <Link
              activeClass="active"
              to="skills"
              smooth={true}
              duration={1000}
              delay={100}
            >
              {data.header.links.contact}
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <Titleicons />
      <div className="scrolldown">
        <Link
          activeClass="active"
          to="aboutus"
          smooth={true}
          duration={1000}
          delay={100}
        >
          <img src={down} />
        </Link>
      </div>
      <Element name="aboutus" className="element"></Element>
      <Aboutus />
      <Skills />
      <Element name="skills" className="element"></Element>
    </div>
  );
}

export default App;
