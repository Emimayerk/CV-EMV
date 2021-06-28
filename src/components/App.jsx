import React from "react";
import Header from "./Header.jsx";
import PrincipalSkills from "./Principal-Skills";
import OtherSkills from "./OtherSkills.jsx";
import Contact from "./Contact";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <PrincipalSkills />
      <OtherSkills />
      <Contact />
    </React.Fragment>
  );
};

export default App;
