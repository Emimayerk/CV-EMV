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
          <SiHtml5 fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          <SiCss3 fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          <SiGit fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          <SiGithub fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          <SiBootstrap
            fill="rgba(255, 255, 255, .8)"
            className="icons-skills"
          />
          <SiVisualstudiocode
            fill="rgba(255, 255, 255, .8)"
            className="icons-skills"
          />
          <SiAdobexd fill="rgba(255, 255, 255, .8)" className="icons-skills" />
          <SiJquery fill="rgba(255, 255, 255, .8)" className="icons-skills" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default OtherSkills;
