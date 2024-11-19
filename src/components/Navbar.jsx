import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "nav-link active" : "nav-link");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="encabezado">
      <div className="logo-name" id="logoName">
        <Link to="/" className="logo-link">
          <img className="logo-icon" loading="lazy" alt="Logo" src="./logo.svg" />
          <div className="fortubil">FORTUBIL</div>
        </Link>
      </div>
      <nav>
        <div className={`nav-items ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}>
          <Link to="/page1" className={isActive("/page1")}>Cursos</Link>
          <Link to="/page2" className={isActive("/page2")}>Preguntas Frecuentes</Link>
          <Link to="/page3" className={isActive("/page3")}>Sobre Nosotros</Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

