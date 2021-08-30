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
          En el presente me encuentro estudiando a fondo el uso de esta
          librería/framework.
        </h5>
        <div className="description-skills">
          <SiJavascript fill="#ffffff" />
          <h3>Javascript - 2 años</h3>
        </div>
        <h5>
          Actualmente trabajo como Front End Developer en Integra Software donde
          mi principal tarea se basa en desarrollar un ECommerce con Vanilla
          JavaScript consumiendo API's desde un Back End de Progress Application
          Server.
        </h5>
        <div className="description-skills">
          <SiWordpress fill="#ffffff" />
          <h3>WordPress / Woocommerce - 3 años</h3>
        </div>
        <h5>
          He desarrollado varios sitios, trabajando para Friendly Marketing,
          usando este CMS sobre la plataforma de venta online de WooCommerce.
        </h5>
      </div>
    </React.Fragment>
  );
};

export default PrincipalSkills;
