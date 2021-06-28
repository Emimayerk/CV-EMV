import React from "react";

import "../css/PrincipalSkills.css";

import { SiReact, SiJavascript, SiWordpress } from "react-icons/si";

const PrincipalSkills = () => {
  return (
    <React.Fragment>
      <div className="block-skills">
        <div className="title-skills">
          <h2>HABILIDADES PRINCIPALES</h2>
        </div>
        <div className="description-skills">
          <SiReact fill="#ffffff" />
          <h3>React JS - 1 año</h3>
        </div>
        <h5>
          Hago uso de este framework trabajando para Integra Software donde mi
          principal tarea se basa en migrar un ERP a Web.
        </h5>
        <div className="description-skills">
          <SiJavascript fill="#ffffff" />
          <h3>Javascript - 2 años</h3>
        </div>
        <h5>
          Profundizo día a día mis conocimientos en este lenguaje capacitándome
          de manera autodidacta.
        </h5>
        <div className="description-skills">
          <SiWordpress fill="#ffffff" />
          <h3>WordPress / Woocommerce - 3 años</h3>
        </div>
        <h5>
          He desarrollado varios sitios usando este CMS sobre la plataforma de
          ventas de Woocommerce.
        </h5>
      </div>
    </React.Fragment>
  );
};

export default PrincipalSkills;
