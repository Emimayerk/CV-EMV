import React from 'react';
import Header from './Header.jsx';
import WorkExperience from './WorkExperience';
import PrincipalSkills from './Principal-Skills';
import OtherSkills from './OtherSkills.jsx';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <WorkExperience />
      <PrincipalSkills />
      <OtherSkills />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
};

export default App;
