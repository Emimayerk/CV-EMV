import React from 'react';

import '../css/PrincipalSkills.css';

import { SiCss3, SiHtml5, SiJavascript, SiWordpress } from 'react-icons/si';

const PrincipalSkills = () => {
  return (
    <React.Fragment>
      <div className='block-skills'>
        <div className='title-skills'>
          <h2>HABILIDADES PRINCIPALES</h2>
        </div>
        <div className='description-skills'>
          <SiHtml5 fill='#ffffff' />
          <h3>HTML5</h3>
        </div>
        <div className='description-skills'>
          <SiCss3 fill='#ffffff' />
          <h3>CSS3</h3>
        </div>
        <div className='description-skills'>
          <SiJavascript fill='#ffffff' />
          <h3>Javascript</h3>
        </div>
        <div className='description-skills'>
          <SiWordpress fill='#ffffff' />
          <h3>WordPress / Woocommerce</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PrincipalSkills;
