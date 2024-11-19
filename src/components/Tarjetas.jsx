import React, { useState } from "react";

const Tarjetas = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const images = [
    { default: "Group2.png", clicked: "busqueda.png" },
    { default: "Groupp.png", clicked: "Group3.png" },
    { default: "Grou.png", clicked: "Group.png" },
    { default: "ACTUALIZAR.png", clicked: "ultimo.png" }
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index); 
  };

  return (
    <div className="objetivos">
      {/* Tarjetas de objetivos */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`card ${selectedCard === index ? "active" : ""}`} 
          onClick={() => handleCardClick(index)} // Maneja clics en escritorio
          onTouchStart={() => handleCardClick(index)} // Maneja toques en dispositivos táctiles
        >
          <div className="icon-container">
            <img
              className="icon"
              loading="lazy"
              alt={`Icono ${index}`}
              src={selectedCard === index ? image.clicked : image.default}
            />
          </div>
          <div className="text-content">
            <div className="description">
              {index === 0 && "Brindar información de educación financiera para guiar a los jóvenes en sus propias finanzas."}
              {index === 1 && "Proveer información accesible, rápida y eficiente para los usuarios."}
              {index === 2 && "Presentar el vocabulario financiero en un lenguaje sencillo y sin ambigüedades para una mejor comprensión."}
              {index === 3 && "Actualizar constantemente el contenido del mundo financiero para los usuarios."}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tarjetas;

