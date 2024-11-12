import React, { useState } from "react";
import "@styles/cursos.css"; // Archivo CSS

const TarjetasCursos = () => {
  // Estado para almacenar las rotaciones de cada tarjeta
  const [rotatedCards, setRotatedCards] = useState({});

  const toggleRotation = (id) => {
    setRotatedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Cambia el estado solo para la tarjeta seleccionada
    }));
  };

  return (
    <div className="courses-container">
      {/* Sección 1: Maestros en finanzas */}
      <div className="section-title">
        <img
          src="/public/Teacher Hiring.png"
          alt="Teacher Hiring"
          className="section-icon"
        />
        <h2>Maestros en finanzas</h2>
      </div>
      <div className="courses-row">
        {/* Cuatro tarjetas de la sección Maestros en finanzas */}
        <div className="course-card" onClick={() => toggleRotation(1)}>
          <div className={`course-card-inner ${rotatedCards[1] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/foto juliana.png"
                />
                <a
                  className="course-title"
                  href="https://platzi.com/cursos/ahorro-personal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Finanzas Personales: Cómo Gestionar Créditos y Deudas
                </a>
                <div className="instructor">Liliana Olivares Gómez</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
                El ahorro, son tus cimientos. Aprende estrategias para convertirlo en hábito, lograr estabilidad, prepararte para el futuro y cumplir tus sueños.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">1 hora de contenido</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/Attendance.png"
                    alt="Práctica"
                    className="detail-icon"
                  />
                  <span className="detail-text">6 horas de práctica</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Pago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Replicamos la estructura de las tarjetas para más ejemplos */}
        <div className="course-card" onClick={() => toggleRotation(2)}>
        <div className={`course-card-inner ${rotatedCards[2] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/fot-liliana@2x.png"
                />
                <a
                  className="course-title"
                  href="https://platzi.com/cursos/finanzas-futuro/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=485"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Finanzas Personales para el Futuro
                </a>
                <div className="instructor">Liliana Zamacona</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              Aprende a invertir y ahorrar. Así podrás tener el capital suficiente para cumplir tus metas, como tomarte un año sabático y tener una vejez plena.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">3 hora de contenido</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/Attendance.png"
                    alt="Práctica"
                    className="detail-icon"
                  />
                  <span className="detail-text">14 horas de práctica</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Pago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card" onClick={() => toggleRotation(3)}>
          <div className={`course-card-inner ${rotatedCards[3] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/ellipse-13@2x.png"
                />
                <a
                  className="course-title"
                  href="https://platzi.com/cursos/manejo-deuda/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=214"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curso para Manejar tu Deuda
                </a>
                <div className="instructor">Juan Camilo González</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              Mejora y obten el control de tu dinero. Organiza tu presupuesto, entiende cómo funciona un crédito y aprende a salir de tus deudas.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">3 hora de contenido</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/Attendance.png"
                    alt="Práctica"
                    className="detail-icon"
                  />
                  <span className="detail-text">8 horas de práctica</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Pago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="course-card" onClick={() => toggleRotation(4)}>
          <div className={`course-card-inner ${rotatedCards[4] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/ellipse-12-5@2x.png"
                />
                <a
                  className="course-title"
                  href="https://www.coursera.org/learn/estrategia-financiera"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introducción a las finanzas
                </a>
                <div className="instructor">Daniel Roberto Béjar López</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              En este curso estudiaremos el objetivo principal de las finanzas, la importancia en la creación de valor y mantenerlo a través de un uso eficiente de los recursos financieros.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">9 hora de contenido </span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/Attendance.png"
                    alt="Práctica"
                    className="detail-icon"
                  />
                  <span className="detail-text">A tu propio ritmo</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Pago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 2: Universidades */}
      <div className="section-title">
        <img
          src="/public/Graduation Cap.png"
          alt="Graduation Cap"
          className="section-icon"
        />
        <h2>Universidades</h2>
      </div>
      <div className="courses-row">
        {/* Cuatro tarjetas de la sección Universidades */}
        <div className="course-card" onClick={() => toggleRotation(5)}>
          <div className={`course-card-inner ${rotatedCards[5] ? "rotated" : ""}`}>

            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/Ellipse 12.png"
                />
                <a
                  className="course-title"
                  href="https://www.edx.org/es/learn/excel/universidad-del-rosario-excel-basico-para-emprendedores?index=spanish_product&queryID=dfc637610b220fcae89148dcfdcceda9&position=3&results_level=second-level-results&term=&objectID=course-d4c3306f-0fb6-452d-ab64-5b79557b99a3&campaign=Excel+b%C3%A1sico+para+emprendedores&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fes%2Fsearch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Excel básico para emprendedores
                </a>
                <div className="instructor">Universidad del Rosario</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              Aprende los principales usos que puedes darle a Excel en tu vida como emprendedor, desde organizar la información hasta crear tablas dinámicas para el manejo de datos.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">3 semanas</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Puedes agregar las otras tres tarjetas de la misma forma */}
        <div className="course-card" onClick={() => toggleRotation(6)}>
          <div className={`course-card-inner ${rotatedCards[6] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/Ellipse.png"
                />
                <a
                  className="course-title"
                  href="https://www.edx.org/es/learn/financial-analysis/universidades-anahuac-principios-de-analisis-e-instrumentos-financieros?webview=false&campaign=Principios+de+An%C3%A1lisis+e+Instrumentos+Financieros&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fes%2Faprende%2Ffinanzas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Principios de Análisis e Instrumentos Financieros
                </a>
                <div className="instructor">Institución Anahuac</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              Este curso se desarrolla para que el participante cuente con un sólido conocimiento de las finanzas empresariales básicas y pueda tomar las mejores decisiones, que signifiquen la mayor rentabilidad y maximización del valor de la empresa.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">5 semanas</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card" onClick={() => toggleRotation(7)}>
          <div className={`course-card-inner ${rotatedCards[7] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/Ellipse 11.png"
                />
                <a
                  className="course-title"
                  href="https://www.edx.org/es/learn/personal-finance/pontificia-universidad-javeriana-finanzas-personales?webview=false&campaign=Finanzas+Personales&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fes%2Faprende%2Fcredito-y-cobranza"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Finanzas Personales
                </a>
                <div className="instructor">Pontificia Universidad Javeriana</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              Realice el diagnóstico real de sus finanzas personales o familiares y logre la libertad financiera.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">10 semanas</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="course-card" onClick={() => toggleRotation(8)}>
          <div className={`course-card-inner ${rotatedCards[8] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/Ellipse1.png"
                />
                <a
                  className="course-title"
                  href="https://www.edx.org/es/learn/finance/tecnologico-de-monterrey-informacion-financiera-y-su-analisis?index=spanish_product&queryID=da626724cc58c75250771eb995e7a1e9&position=6&results_level=second-level-results&term=&objectID=course-95737e5b-657c-4910-85ea-82f3e713e378&campaign=Informaci%C3%B3n+financiera+y+su+an%C3%A1lisis&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fes%2Fsearch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Información Financiera y su Análisis
                </a>
                <div className="instructor">Tencológico de Monterrey</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              Aplica fundamentos contables y financieros para evaluar la situación financiera de la empresa e informar el proceso de toma de decisiones.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">4 semanas</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 3: Empresas */}
      <div className="section-title">
        <img
          src="/public/Business Group.png"
          alt="Business Group"
          className="section-icon"
        />
        <h2>Empresas</h2>
      </div>
      <div className="courses-row">
        {/* Cuatro tarjetas de la sección Empresas */}
        <div className="course-card" onClick={() => toggleRotation(9)}>
          <div className={`course-card-inner ${rotatedCards[9] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/Ellips.png"
                />
                <a
                  className="course-title"
                  href="https://www.edx.org/es/learn/financial-accounting/logyca-introduccion-a-la-factura-electronica?index=spanish_product&queryID=0206e3184555dd66fc268c525c43198c&position=24&results_level=second-level-results&term=&objectID=course-7c37c072-cf6e-4474-97f8-723779f787df&campaign=Introducci%C3%B3n+a+la+factura+electr%C3%B3nica&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fes%2Fsearch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introducción a la factura electronica
                </a>
                <div className="instructor">logycaX</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              Conoce los beneficios de la facturación electrónica y su implementación.También, comprende la relación entre quienes facturan electrónicamente y quienes adquieren bienes que son facturados por ese medio.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">4 semanas</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Agrega las tres tarjetas restantes */}
        <div className="course-card" onClick={() => toggleRotation(10)}>
          <div className={`course-card-inner ${rotatedCards[10] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/fot-jp@2x.png"
                />
                <a
                  className="course-title"
                  href="https://lp.mispropiasfinanzas.com/curso-de-finanzas-personales?utm_term=directo-pagina-web&utm_campaign=venta-cursos-evergreen&utm_medium=directo-pagina-web&hsrc=ZGlyZWN0b3BhZ2luYXdlYg%3D%3D&utm_source=organico-redes-sociales&utm_content=directo-pagina-web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Libera tus finanzas en 6 pasos
                </a>
                <div className="instructor">Juan Pablo Zuluaga</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              El propósito es que cualquier persona aprenda a manejar sus finanzas sin ser un experto en finanzas. Incluso sin experiencia o conocimiento previo. 
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">1 hora de contenido</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">USD $67</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card" onClick={() => toggleRotation(11)}>
          <div className={`course-card-inner ${rotatedCards[11] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/Ellipse2.jpg"
                />
                <a
                  className="course-title"
                  href="https://www.coursera.org/specializations/financial-instruments-trading-investing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programa especializado: Guía práctica del comercio
                </a>
                <div className="instructor">Interactive Brokers</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
              Comprender la interconexión de los mercados mundiales de capitales con un énfasis práctico en la negociación
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">1 mes a 10 horas a la semana</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card" onClick={() => toggleRotation(12)}>
          <div className={`course-card-inner ${rotatedCards[12] ? "rotated" : ""}`}>
            <div className="course-front">
              <div className="course-content">
                <img
                  className="profile-image"
                  alt="Imagen del instructor"
                  src="/public/ellipse-11@2x.png"
                />
                <a
                  className="course-title"
                  href="https://mispropiasfinanzas.com/presupuesto-y-ahorro?utm_term=instagram-pinned-stories&utm_campaign=evergreen&utm_medium=instagram-pinned-stories&hsrc=aW5zdGFncmFtcGlubmVkc3Rvcmllcw%3D%3D&utm_source=organic-social-media&utm_content=instagram-pinned-stories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Presupuesto y Ahorro
                </a>
                <div className="instructor">Mis Propias Finanzas</div>
              </div>
            </div>
            <div className="course-back">
            <h3 className="course-subtitle">Descripción:</h3>
              <p className="course-description">
                El curso está pensado para que personas que no tienen una formación en finanzas, que nunca les ha gustado el tema o que les da miedo o pánico porque parece muy difícil, puedan darse cuenta que es algo que todos podemos aprender y en lo que podemos mejorar.
              </p>
              <div className="course-details">
                <div className="detail-item">
                  <img
                    src="/public/clock@2x.png"
                    alt="Duración"
                    className="detail-icon"
                  />
                  <span className="detail-text">1 hora de contenido</span>
                </div>
                <div className="detail-item">
                  <img
                    src="/public/dollar-coin@2x.png"
                    alt="Pago"
                    className="detail-icon"
                  />
                  <span className="detail-text">USD $37</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TarjetasCursos;

