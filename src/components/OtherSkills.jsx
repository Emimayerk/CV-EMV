import React from 'react';

import '../css/OtherSkills.css';

import { DiNodejs, DiNpm } from 'react-icons/di';
import { SiHtml5, SiCss3, SiGit, SiBootstrap, SiBabel, SiAdobexd, SiWebpack, SiPhp, SiSass, SiLinux, SiYarn } from 'react-icons/si';

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
            <h3>SASS</h3>
            <SiSass fill='rgba(255, 255, 255, .8)' className='icons-skills' />
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
            <h3>YARN</h3>
            <SiYarn fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>BABEL</h3>
            <SiBabel fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>WEBPACK</h3>
            <SiWebpack fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>NODE JS</h3>
            <DiNodejs fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>PHP</h3>
            <SiPhp fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>LINUX</h3>
            <SiLinux fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
          <div className='other-skills-containers'>
            <h3>ADOBE Xd</h3>
            <SiAdobexd fill='rgba(255, 255, 255, .8)' className='icons-skills' />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OtherSkills;
