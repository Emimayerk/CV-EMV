import React from "react";

import OP from "../assets/img/OP.jpg";
import mpmarkets from "../assets/img/mpmarkets.jpg";
import kiboAR from "../assets/img/kiboAR.jpg";
import Isquared from "../assets/img/ISQUARED.jpg";
import wedding from "../assets/img/wedding.jpg";
import ccr from "../assets/img/ccr.jpg";

import "../css/Portfolio.css";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="block-portfolio">
        <div className="title-porfolio">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="box-works">
          <div className="work-container">
            <h3>OP AMOBLAMIENTOS</h3>
            <figure>
              <a href="https://www.opamoblamientos.com/" target="blank">
                <img src={OP} alt="" />
              </a>
            </figure>
          </div>
          <div className="work-container">
            <h3>JK WEDDING PLANNER</h3>
            <figure>
              <a
                href="https://pruebasfriendlymarketing.us/jkbouquet/"
                target="blank"
              >
                <img src={wedding} alt="" />
              </a>
            </figure>
          </div>
          <div className="work-container">
            <h3>CCR STEEL</h3>
            <figure>
              <a
                href="https://pruebasfriendlymarketing.us/ccrsteel/"
                target="blank"
              >
                <img src={ccr} alt="" />
              </a>
            </figure>
          </div>
          <div className="work-container">
            <h3>MP MARKETS</h3>
            <figure>
              <a
                href="https://pruebasfriendlymarketing.us/mpmarkets/"
                target="blank"
              >
                <img src={mpmarkets} alt="" />
              </a>
            </figure>
          </div>
          <div className="work-container">
            <h3>KIBOVISIÓN</h3>
            <figure>
              <a href="https://www.kibovision.com.ar/" target="blank">
                <img src={kiboAR} alt="" />
              </a>
            </figure>
          </div>
          <div className="work-container">
            <h3>iSQUARED LATAM</h3>
            <figure>
              <a href="https://www.isquared-la.com/" target="blank">
                <img src={Isquared} alt="" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
