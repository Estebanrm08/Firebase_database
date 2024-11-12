import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showMoreCourses, setShowMoreCourses] = useState(false);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const courses = [
    { id: 1, title: "Presupuesto y Ahorro", institution: "Mis Propias Finanzas", link: "https://mispropiasfinanzas.com/presupuesto-y-ahorro", image: "/ellipse-11@2x.png" },
    { id: 2, title: "Principios de Análisis e instrumentos financieros", institution: "Institución Anahuac", link: "https://www.edx.org/es/learn/financial-analysis/universidades-anahuac-principios-de-analisis-e-instrumentos-financieros", image: "/Ellipse.png" },
    { id: 3, title: "Excel básico para emprendedores", institution: "Universidad del Rosario", link: "https://www.edx.org/es/learn/excel/universidad-del-rosario-excel-basico-para-emprendedores", image: "/Ellipse 12.png" },
    { id: 4, title: "Introducción a la factura electrónica", institution: "LogycaX", link: "https://www.edx.org/es/learn/financial-accounting/logyca-introduccion-a-la-factura-electronica", image: "/Ellips.png" },
    { id: 5, title: "Libera tus finanzas en 6 pasos", institution: "Juan Pablo Zuluaga", link: "https://lp.mispropiasfinanzas.com/curso-de-finanzas-personales", image: "fot-jp@2x.png" },
    { id: 6, title: "Información financiera y su análisis", institution: "Tencológico de Monterrey", link: "https://www.edx.org/es/learn/finance/tecnologico-de-monterrey-informacion-financiera-y-su-analisis", image: "/Ellipse1.png" },
    { id: 7, title: "Introducción a las finanzas", institution: "Daniel Roberto Béjar López", link: "https://www.coursera.org/learn/estrategia-financiera", image: "/ellipse-12-5@2x.png" },
    { id: 8, title: "Finanzas Personales", institution: "Pontificia Universidad Javeriana", link: "https://www.edx.org/es/learn/personal-finance/pontificia-universidad-javeriana-finanzas-personales", image: "/Ellipse 11.png" },
  ];

  const nextCourses = () => {
    if (currentStartIndex + 4 < courses.length) {
      setCurrentStartIndex(currentStartIndex + 4);
      setShowMoreCourses(true);
    }
  };

  const prevCourses = () => {
    if (currentStartIndex - 4 >= 0) {
      setCurrentStartIndex(currentStartIndex - 4);
      setShowMoreCourses(false);
    }
  };

  return (
    <footer className="footer">
      <div className="cursos2">
        <h2 className="cursos-para-mejorar-container">
          <span className="cursos-title">Cursos</span> para mejorar y afianzar tu educación financiera
        </h2>

        <div className="courses-list">
          {courses.slice(currentStartIndex, currentStartIndex + 4).map((course) => (
            <div key={course.id} className="course-item">
              <img className="course-icon" src={course.image} alt={course.title} />
              <a href={course.link} target="_blank" rel="noopener noreferrer">{course.title}</a>
              <p>{course.institution}</p>
            </div>
          ))}
        </div>

        <div className="courses-buttons">
          {currentStartIndex > 0 && (
            <div className="more-courses-button-reves" onClick={prevCourses}>
              <img className="more-than-icon" src="/more-than@2x - copia.png" alt="Desplazar a la izquierda" />
            </div>
          )}

          {currentStartIndex + 4 < courses.length && (
            <div className="more-courses-button" onClick={nextCourses}>
              <img className="more-than-icon" src="/more-than@2x.png" alt="Desplazar a la derecha" />
            </div>
          )}
        </div>

        {showMoreCourses && (
          <div className="show-text">
            <Link to="/page1" className="explore-text">Explorar más cursos</Link>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
