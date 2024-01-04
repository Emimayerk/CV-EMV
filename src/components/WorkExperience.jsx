import React from 'react';

import '../css/WorkExperience.css';

const WorkExperience = () => {
  return (
    <React.Fragment>
      <div className='work-content'>
        <div className='title-work-experience'>
          <h2>Experiencia Laboral</h2>
        </div>

        <div className='individual-work'>
          <h3>Profesional Independiente</h3>
          <p>
            En 2018 comencé por estudiar Marketing Digital, al insertarme en la industria tecnológica pude reconocer rápidamente el interés que despertó el desarrollo web en
            mi persona, paso a paso, creciendo como autodidacta pero influenciado y ayudado por la gran comunidad de desarrolladores, sigo forjando mi camino. En la actualidad
            realizo proyectos como Free Lance, aunque a su vez me hallo deseoso de encontrar un entorno laboral que me incite a seguir creciendo, donde la solidaridad y una
            perspectiva humana integral sirvan de base en la construcción de mi edificio intelectual, es por eso que sigo buscando oportunidades en los horizontes de la
            tecnología.
          </p>
        </div>

        <div className='individual-work'>
          <h3>Friendly Marketing Agency</h3>
          <p>
            De 2019 a 2023 he trabajado contratado como freelance para esta agencia de marketing, donde usamos WordPress para la creación y gestión de proyectos orientados a
            PyMES. Principalmente desarrollamos e-Commerce's y optimizamos su posicionamiento SEO/SEM. Realizamos integraciones a redes sociales y aplicamos herramientas para
            el control de métricas, facilitando al cliente información importante en el flujo de ventas.
          </p>
        </div>

        <div className='individual-work'>
          <h3>Integra Software</h3>
          <p>
            En este espacio de trabajo tuve la posibilidad de desarrollar, conjunto a un equipo de profesionales, un e-Commerce con HTML, CSS y Vainilla JS bajo el estándar de
            ECMA Script 6. Aquí mismo puse en práctica mis skills de programación durante 12 meses.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkExperience;
