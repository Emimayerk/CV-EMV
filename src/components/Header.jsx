import React from "react";

import "../css/header.css";

import emi from "../assets/img/emi.jpg";
import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";

const Header = () => {
  return (
    <React.Fragment>
      <div className="block-header">
        <img src={emi} alt="" className="principal-image" />
        <div className="box-title">
          <h1>EMILIANO MAYER VIEGAS</h1>
          <h3>Fron End Developer</h3>
          <div className="box-links">
            <figure>
              <a
                href="https://www.linkedin.com/in/emiliano-mayer-viegas-03a0a41b2/"
                target="blank_"
              >
                <img src={linkedin} alt="" />
              </a>
            </figure>
            <figure>
              <a href="https://github.com/Emimayerk" target="blank_">
                <img src={github} alt="" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
