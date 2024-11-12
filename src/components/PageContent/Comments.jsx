import React, { useState } from 'react';
import "@styles/Comments.css"

const Comments = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const comments = [
    {
      text: "Estoy realmente impresionado con la calidad de los cursos de Fortubil. Como estudiante universitario, siempre he querido aprender más sobre finanzas. Con Fortubil, finalmente encontré un lugar donde puedo aprender de manera clara y concisa. ¡Los recomiendo totalmente a todos mis amigos y compañeros de clase!",
      author: "- Juan Pérez"
    },
    {
      text: "¡Gracias a Fortubil, ahora me siento mucho más segura con mis finanzas! Los cursos son excelentes, y lo mejor de todo es que están diseñados para jóvenes, con un lenguaje fácil de entender y ejemplos prácticos que realmente hacen que los conceptos cobren vida. Ya he aplicado muchos de los consejos que he aprendido y estoy viendo resultados tangibles.",
      author: "- Camila Rodríguez"
    },
    {
      text: "Fortubil ha sido una verdadera revelación para mí. Siempre me ha interesado el mundo de las finanzas, pero nunca supe por dónde empezar. Con sus cursos, finalmente pude adentrarme en este tema de una manera fácil y divertida. Los instructores son excelentes. ¡No puedo recomendarlos lo suficiente!",
      author: "- Andrés Torres"
    },
    {
      text: "Antes de descubrir Fortubil, luchaba por entender los aspectos financieros de mi negocio. Gracias a sus cursos claros y concisos, ahora tengo una mejor comprensión de cómo administrar mis finanzas empresariales. Esto ha llevado a un crecimiento significativo en mi emprendimiento y una mayor confianza en mis habilidades financieras. ¡Gracias, Fortubil!",
      author: "- María García"
    },
    {
      text: "Como joven emprendedor, siempre he tenido dificultades para manejar las finanzas de mi negocio. Sin embargo, desde que inicie algunos de sus cursos, he visto una mejora notable en las finanzas de mi emprendimiento. ¡Recomendaría Fortubil a cualquier emprendedor serio que busque mejorar su juego financiero!",
      author: "- Javier López"
    },
  ];

  const handleMonedaClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="comments-container">
      {/* Texto e imagen a la izquierda */}
      <div className="left-section">
        <h2 className="success-text">
          Ayudamos al impulso definitivo para tu <span className="highlight">éxito financiero</span>
        </h2>
        <img src="/billete2@2x.png" alt="Billete" className="billete-image" />
      </div>

      {/* Monedas y comentarios */}
      <div className="right-section">
        <div className="moneda-container">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index === selectedIndex ? "/moneda-logo-variante.svg" : "/logo.svg"}
              alt="Moneda"
              className="moneda-icon"
              onClick={() => handleMonedaClick(index)}
            />
          ))}
        </div>

        {/* Mostrar el comentario correspondiente */}
        <div className="comment-section">
          <p className="comment-text">"{comments[selectedIndex].text}"</p>
          <p className="comment-author"><strong>{comments[selectedIndex].author}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
