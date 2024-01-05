import React from 'react';

import '../css/OtherSkills.css';

import { DiNpm } from 'react-icons/di';
import {
  SiHtml5,
  SiCss3,
  SiGit,
  SiBootstrap,
  SiWoocommerce,
  SiPhp,
  SiWordpress,
  SiJavascript,
  SiWebpack,
  SiBabel,
  SiYarn,
  SiFilezilla,
  SiGithub,
  SiAdobexd,
} from 'react-icons/si';

const OtherSkills = () => {
  return (
    <React.Fragment>
      <div className='block-other-skills'>
        <div className='title-other-skills'>
          <h2>OTRAS HABILIDADES</h2>
        </div>
        <div className='icon-other-skills'>
          <div className='other-skills-containers'>
            <h3>HTML5</h3>
            <SiHtml5 fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>CSS3</h3>
            <SiCss3 fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>JAVASCRIPT</h3>
            <SiJavascript fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>PHP</h3>
            <SiPhp fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>WEBPACK</h3>
            <SiWebpack fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>BABEL</h3>
            <SiBabel fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>Yarn</h3>
            <SiYarn fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>FILEZILLA</h3>
            <SiFilezilla fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>GITHUB</h3>
            <SiGithub fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>GIT</h3>
            <SiGit fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>BOOTSTRAP</h3>
            <SiBootstrap fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>NPM</h3>
            <DiNpm fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>WOOCOMMERCE</h3>
            <SiWoocommerce fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>ADOBE XD</h3>
            <SiAdobexd fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>PHP</h3>
            <SiPhp fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>WORDPRESS</h3>
            <SiWordpress fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OtherSkills;
