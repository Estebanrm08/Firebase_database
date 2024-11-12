import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  const location = useLocation();

  // Función para determinar si la ruta es la actual
  const isActive = (path) => (location.pathname === path ? "nav-link active" : "nav-link");

  // Desplazarse al inicio de la página al cambiar de ruta
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse a la parte superior izquierda de la página
  }, [location.pathname]);

  return (
    <header className="encabezado">
      <div className="logo-name" id="logoName">
        <Link to="/" className="logo-link">
          <img className="logo-icon" loading="lazy" alt="Logo" src="./public/logo.svg" />
          <div className="fortubil">FORTUBIL</div>
        </Link>
      </div>
      <nav className="navigation">
        <div className="nav-items">
          <Link to="/page1" className={isActive("/page1")}>Cursos</Link>
          <Link to="/page2" className={isActive("/page2")}>Preguntas Frecuentes</Link>
          <Link to="/page3" className={isActive("/page3")}>Sobre Nosotros</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

