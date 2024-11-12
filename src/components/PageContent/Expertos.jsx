import React, { useState } from "react";
import "@styles/Expertos.css";
import fotoLiliana from "/fot-liliana@2x.png";
import fotoJP from "/fot-jp@2x.png";
import fotoEllipse from "/ellipse-13@2x.png";
import fotoJuliana from "/foto juliana.png";
import logo from "/logo.svg";

const expertsData = [
  {
    name: "Liliana Zamacona",
    experience: ["Fundadora de Joyconomics", "Coach de finanzas personales"],
    courses: [
      { title: "Introducción a Educación Financiera", link: "https://platzi.com/cursos/intro-finanzas/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=485" },
      { title: "Finanzas Personales para el Futuro", link: "https://platzi.com/cursos/finanzas-futuro/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=485" },
      { title: "Creatividad Financiera", link: "https://platzi.com/cursos/creatividad-financiera/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=485" }
    ],
    photo: fotoLiliana,
  },
  {
    name: "Juan Pablo Zuluaga",
    experience: ["Cofundador de 4 emprendimientos", "Director de Desarrollo Metro Hotels", "Director de Proyectos Metaza S.A."],
    courses: [
      { title: "Libera tus finanzas en 6 pasos", link: "https://lp.mispropiasfinanzas.com/curso-de-finanzas-personales?utm_term=directo-pagina-web&utm_campaign=venta-cursos-evergreen&utm_medium=directo-pagina-web&hsrc=ZGlyZWN0b3BhZ2luYXdlYg%3D%3D&utm_source=organico-redes-sociales&utm_content=directo-pagina-web" }
    ],
    photo: fotoJP,
  },
  {
    name: "Juan Camilo Gonzáles",
    experience: ["Cofundador y CEO de FiguroLatam", "Cofundador de Tranqui Finanzas", "Coach financiero", "Docente de finanzas y emprendimiento"],
    courses: [
      { title: "Finanzas para Emprendedores", link: "https://platzi.com/cursos/financiamiento/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=214" },
      { title: "Presupuesto y Flujo de Caja", link: "https://platzi.com/cursos/presupuesto/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=214" },
      { title: "Curso para Manejar tu Deuda", link: "https://platzi.com/cursos/manejo-deuda/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=214" }
    ],
    photo: fotoEllipse,
  },
  {
    name: "Liliana Olivares Gómez",
    experience: ["Fundadora & CEO de Adulting"],
    courses: [
      { title: "Cómo Gestionar Créditos y Deudas", link: "https://platzi.com/cursos/ahorro-personal/" },
      { title: "Cómo hacer un Presupuesto", link: "https://platzi.com/cursos/presupuesto-personal/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=1207" },
      { title: "Cómo Ahorrar Dinero", link: "https://platzi.com/cursos/ahorro-personal/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=1207" }
    ],
    photo: fotoJuliana,
  },
];

const Expertos = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isClosing, setIsClosing] = useState(false); // Estado para manejar el fade-out

  const handleExpertClick = (expert) => setSelectedExpert(expert);

  const handleCloseModal = () => {
    setIsClosing(true);
    // Esperar el final de la animación para cerrar completamente el modal
    setTimeout(() => {
      setSelectedExpert(null);
      setIsClosing(false);
    }, 500); // Tiempo igual a la duración de la animación fade-out
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("expert-modal")) {
      handleCloseModal();
    }
  };

  return (
    <div className={`expertos-container ${selectedExpert ? "blur-background" : ""}`}>
      <h2 className="expertos-title">Expertos en las finanzas para <span className="highlight-green">tus cursos</span></h2>
      
      <div className="expertos-photos">
        {expertsData.map((expert, index) => (
          <div key={index} className="expert" onClick={() => handleExpertClick(expert)}>
            <img src={expert.photo} alt={expert.name} className="expert-photo" />
            <div className="expert-name">{expert.name}</div>
          </div>
        ))}
      </div>

      {selectedExpert && (
        <div className={`expert-modal ${isClosing ? "fade-out" : ""}`} onClick={handleBackgroundClick}>
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>X</button>
            <h3 className="modal-title">{selectedExpert.name}</h3>
            
            <section className="modal-section">
              <div className="Experiencia">
                <h4>Experiencia</h4>
              </div>
              <ul className="experience-list">
                {selectedExpert.experience.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </section>
            
            <section className="modal-section">
              <div className="courses-header">
                <img src={logo} alt="Logo" className="course-logo" />
                <h4>Cursos</h4>
              </div>
              <ul className="course-list">
                {selectedExpert.courses.map((course, index) => (
                  <li key={index}>
                    <a href={course.link} target="_blank" rel="noopener noreferrer">{course.title}</a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expertos;
