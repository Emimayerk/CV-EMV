import React from 'react';

import OP from '../assets/img/OP.jpg';
import kiboAR from '../assets/img/kiboAR.jpg';
import fgabriele from '../assets/img/florencia-gabriele.jpg';
import wedding from '../assets/img/wedding.jpg';
import ccr from '../assets/img/ccr.jpg';
import chapas from '../assets/img/chapas.jpg';
import mg from '../assets/img/martinez-gorostiaga.jpg';
import maq from '../assets/img/maquijata1.jpg';
import roster from '../assets/img/roster.jpg';
import fisio from '../assets/img/fisio.jpg';
import weller from '../assets/img/weller.jpeg';
import friendly from '../assets/img/friendly.jpg';
import abz from '../assets/img/logo verde y crudo.svg';

import '../css/Portfolio.css';

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className='block-portfolio'>
        <div className='title-porfolio'>
          <h2>PORTFOLIO</h2>
        </div>
        <div className='box-works'>
           <div className='work-container'>
            <h3>MARTINEZ GOROSTIAGA</h3>
            <figure>
              <a href='https://martinezgorostiaga.netlify.app/' target='blank'>
                <img src={mg} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>OP AMOBLAMIENTOS</h3>
            <figure>
              <a href='https://emimayerk.github.io/OPAmoblamientos/' target='blank'>
                <img src={OP} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>MAQUIJATA</h3>
            <figure>
              <a href='https://maquijata.com.ar/' target='blank'>
                <img src={maq} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>PRODE</h3>
            <figure>
              <a href='https://prodeabrazocaracol.netlify.app/' target='blank'>
                <img src={abz} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>ROSTER</h3>
            <figure>
              <a href='https://www.rosariotermoformados.com/' target='blank'>
                <img src={roster} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>FISIO ROSARIO</h3>
            <figure>
              <a href='https://www.fisiorosario.com/' target='blank'>
                <img src={fisio} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>DR PATRICIO WELLER</h3>
            <figure>
              <a href='https://www.drpatricioweller.com/' target='blank'>
                <img src={weller} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>FRIENDLY MARKETING</h3>
            <figure>
              <a href='https://www.friendlymarketingagency.com/' target='blank'>
                <img src={friendly} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>CENTRO DE CHAPAS</h3>
            <figure>
              <a href='https://centrodechapas.com.ar//' target='blank'>
                <img src={chapas} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>JK WEDDING PLANNER</h3>
            <figure>
              <a href='https://pruebasfriendlymarketing.us/jkbouquet/' target='blank'>
                <img src={wedding} alt='' />
              </a>
            </figure>
          </div>
          
          <div className='work-container'>
            <h3>CCR STEEL</h3>
            <figure>
              <a href='https://ccrsteel.com/' target='blank'>
                <img src={ccr} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>KIBOVISIÓN</h3>
            <figure>
              <a href='https://www.kibovision.com.ar/' target='blank'>
                <img src={kiboAR} alt='' />
              </a>
            </figure>
          </div>
          <div className='work-container'>
            <h3>FLORENCIA GABRIELE</h3>
            <figure>
              <a href='https://florenciagabriele.com/' target='blank'>
                <img src={fgabriele} alt='' />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
