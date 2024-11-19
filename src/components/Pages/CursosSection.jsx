import React from "react";
import "@styles/styles.css";

const CursosSection = () => {
  return (
    <main className="cursos-pag-inner">
      <section className="encuentra-el-curso-perfecto-pa-parent">
        <div className="encuentra-el-curso-container">
          <span className="encuentra-el-curso-container1">
            <p className="encuentra-el-curso-perfecto-pa">
              <span className="encuentra-el-curso-perfecto-pa1">
                <span className="encuentra-el-curso">
                  Encuentra el curso perfecto para ti
                </span>
              </span>
            </p>
            <p className="explora-nuestra-amplia-gama-de">
              <span>
                <span className="explora-nuestra-amplia">
                  Explora nuestra amplia gama de cursos diseñados para impulsar el
                </span>
                <span className="conocimiento-financiero-y">
                  conocimiento financiero y llevarte un paso más cerca de tus metas económicas
                </span>
              </span>
            </p>
          </span>
          {/* Insertamos la imagen aquí */}
          <img
            src="./moneda1@2x.png"
            alt="Moneda decorativa"
            className="moneda-decorativa"
          />
        </div>
      </section>
    </main>
  );
};

export default CursosSection;

