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
          <h3>Integra Software</h3>
          <p>
            En este espacio de trabajo tuve la posibilidad de desarrollar un e-Commerce con HTML, CSS y Vainilla JS bajo el estándar de ECMA Script 6. Aquí mismo puse en
            práctica mis skills de programación durante 12 meses.
          </p>
        </div>
        <div className='individual-work'>
          <h3>Friendly Marketing Agency</h3>
          <p>
            Desde hace 2 años hasta la actualidad trabajo contratado como freelance para esta agencia de marketing, donde usamos WordPress para la creación y gestión de
            proyectos orientados a PyMES. Principalmente desarrollamos e-Commerce's y optimizamos su posicionamiento SEO/SEM. Realizamos integraciones a redes sociales y
            aplicamos herramientas para el control de métricas, facilitando al cliente información importante en el flujo de ventas.
          </p>
        </div>
        <div className='individual-work'>
          <h3>Repuestos Ya</h3>
          <p>
            Trabajé 6 meses como WordPress Developer en una importante empresa dedicada a la venta de autopartes, aquí tuve mi primer experiencia con dicho CMS. Me tocó
            definir pasarelas de pago tales como PayPal y Mercado Pago, integración de un ERP con un e-Commerce mediante API Rest, realización de modificaciones varias
            respecto del Front End del sitio.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorkExperience;
