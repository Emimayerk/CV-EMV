import React from "react";

import "../css/OtherSkills.css";

import {
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiVisualstudiocode,
  SiAdobexd,
  SiJquery,
} from "react-icons/si";

const OtherSkills = () => {
  return (
    <React.Fragment>
      <div className="block-other-skills">
        <div className="title-other-skills">
          <h2>OTRAS HABILIDADES</h2>
        </div>
        <div className="icon-other-skills">
          <div className="other-skills-containers">
            <h3>HTML5</h3>
            <SiHtml5 fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          </div>
          <div className="other-skills-containers">
            <h3>CSS3</h3>
            <SiCss3 fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          </div>
          <div className="other-skills-containers">
            <h3>GIT</h3>
            <SiGit fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          </div>
          <div className="other-skills-containers">
            <h3>GITHUB</h3>
            <SiGithub fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          </div>
          <div className="other-skills-containers">
            <h3>BOOTSTRAP</h3>
            <SiBootstrap
              fill="rgba(255, 255, 255, .8)"
              className="icons-skills"
            />
          </div>
          <div className="other-skills-containers">
            <h3>VSC</h3>
            <SiVisualstudiocode
              fill="rgba(255, 255, 255, .8)"
              className="icons-skills"
            />
          </div>
          <div className="other-skills-containers">
            <h3>ADOBE Xd</h3>
            <SiAdobexd
              fill="rgba(255, 255, 255, .8)"
              className="icons-skills"
            />
          </div>
          <div className="other-skills-containers">
            <h3>jQUERY</h3>
            <SiJquery fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OtherSkills;
