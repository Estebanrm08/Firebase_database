import React from 'react';

const FinancialCulture = () => {
  return (
    <section className="how-it-works-content-wrapper">
  <div className="how-it-works-content">
    <h1 className="como-funciona-fortubil-container">
      <span>Cómo funciona <span className="fortubil1">Fortubil</span></span>
    </h1>
    <div className="features">
      <div className="features-grid">
        <div className="feature-item">
          <img className="feature-icon" loading="lazy" alt="Icono" src="./public/Lupa.png" />
          <div className="feature-title">Encuentra todo lo de finanzas</div>
          <p className="feature-description">Fuente de recopilación financiera para personas que están interesadas en mejorar su educación.</p>
        </div>
        <div className="feature-item">
          <img className="feature-icon" loading="lazy" alt="Icono" src="./public/Pc.png" />
          <div className="feature-title">Cursos de nuestros promotores</div>
          <p className="feature-description">Contamos con plataformas y especialistas para una experiencia más completa en la educación.</p>
        </div>
        <div className="feature-item">
          <img className="feature-icon" loading="lazy" alt="Icono" src="./Lenguaje.png" />
          <div className="feature-title">Lenguaje fácil</div>
          <p className="feature-description">Brindar el lenguaje financiero de forma fácil y sencilla para comprender.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default FinancialCulture;