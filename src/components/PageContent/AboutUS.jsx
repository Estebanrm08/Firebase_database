import React from 'react';

const AboutUS = () => {
  return (
    <section className="principal-inner">
      <div className="tagline-parent">
        <div className="tagline" id="taglineContainer">
          <p className="plataforma-de-educacion" aria-label="Plataforma de Educación Financiera">
            PLATAFORMA DE EDUCACIÓN FINANCIERA
          </p>
          <h1 className="despierta-tu-potencial-container">
            <span className="despierta-tu-potencial">
              ¡Despierta tu potencial financiero
              <span> y aprende fácil de </span>
              <span className="dinero">dinero</span>
              <span className="span">!</span>
            </span>
          </h1>
        </div>
        <div className="illustration">
          <img 
            className="ilustracion-icon" 
            loading="lazy" 
            alt="Ilustración de educación financiera" 
            src="/ilustracion@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
