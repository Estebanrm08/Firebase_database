import React from "react";
import Tarjetas from "../Tarjetas"; 
import "@styles/global.css";
import "@styles/pag.css";


const Page3 = () => {
  return (
    <div>
      <section className="content">
        <div className="content-wrapper-parent">
          <div className="content-wrapper">
            <div className="inner-content">
              <div className="about-content-parent">
                <div className="about-content">
                  <div className="nosotros">Nosotros</div>
                  <h1 className="quines-somos">
                    <span>¿Quiénes </span>
                    <span className="somos">somos</span>
                    <span>?</span>
                  </h1>
                </div>
                <div className="guide-description">
                  <div className="fortubil-es-la">
                    Fortubil es la guía para los jóvenes que quieren emprender y
                    formarse para una vida llena de retos con conocimiento
                    financiero. Ofrecemos el servicio de informar y enseñar a
                    los jóvenes sobre las finanzas y su campo. A través de la
                    página web brindamos diversos cursos y experiencias de
                    estudio para que el usuario inicie su camino en la cultura
                    financiera.
                  </div>
                </div>
              </div>
            </div>
            <div className="component-6">
              <div className="imagen"></div>
              <img
                className="imagen-icon"
                loading="lazy"
                alt=""
                src="./imagen@2x.png" // Ruta de imagen
              />
            </div>
          </div>
          <div className="objectives-content-wrapper">
            <div className="objectives-content">
              <div className="nuestra-meta-con-los-jvenes-wrapper">
                <b className="nuestra-meta-con-container">
                  <span>Nuestra meta </span>
                  <span className="con-los-jvenes">con los jóvenes</span>
                </b>
              </div>
              <Tarjetas />
            </div>
          </div>
        </div>
      </section>

      <section className="financial-culture">
        <div className="culture-content">
          <div className="culture-description">
            <div className="por-qu-fortubil-fomenta-la-cu-parent">
              <h1 className="por-qu-fortubil-container">
                <span className="por-qu-fortubil-container1">
                  <span>¿Por qué </span>
                  <span className="fortubil3">Fortubil </span>
                  <span>fomenta la cultura financiera?</span>
                </span>
              </h1>
              <div className="bill-instance">
                <img
                  className="billete1-icon"
                  loading="lazy"
                  alt=""
                  src="./billete1.svg" // Ruta de imagen
                />
              </div>
            </div>
            <img
              className="moneda-signo-icon"
              loading="lazy"
              alt=""
              src="./moneda-signo@2x.png" // Ruta de imagen
            />
          </div>
          <div className="lack-education">
            <div className="la-falta-de">
              La falta de educación financiera en Colombia, arraigada por
              generaciones de desigualdad económica y falta de políticas
              educativas adecuadas, hace que los jóvenes no estén en la
              capacidad para gestionar sus finanzas personales. Aunque existen
              recursos disponibles para aprender, por la falta de interés no se
              aprovechan y no hay mejora en estos conocimientos que continúan
              afectando la economía personal de los jóvenes. La ignorancia sobre
              finanzas personales, la falta de educación formal al respecto, y
              la ausencia de enfoque en ahorro e inversión desde la educación
              básica, son factores clave en este desafío financiero.
            </div>
          </div>
        </div>
      </section>

      <footer className="contacto2">
        <div className="contact-title">
          <h2 className="contactanos">Contactanos</h2>
        </div>
        <div className="letter-parent">
          <img
            className="letter-icon"
            loading="lazy"
            alt=""
            src="./letter@2x.png"
          />
          <div className="email-container">
            <h2 className="holafortubilcom">hola@fortubil.com</h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page3;

