import React, { useState } from "react";
import "@styles/global.css";
import "@styles/preguntas.css";

const Pag2 = () => {
  const [openQuestions, setOpenQuestions] = useState([]); // Cambié el estado a un array para manejar varias abiertas

  const toggleAnswer = (questionNumber) => {
    setOpenQuestions((prevState) =>
      prevState.includes(questionNumber)
        ? prevState.filter((id) => id !== questionNumber)
        : [...prevState, questionNumber]
    );
  };

  const questions = [
    {
      id: 1,
      question: "¿Cuál es la importancia del ahorro y la inversión para mi futuro financiero?",
      answer: "El ahorro te permite tener un fondo de emergencia y alcanzar tus metas financieras a largo plazo, mientras que la inversión te ayuda a hacer crecer tu dinero y combatir la inflación."
    },
    {
      id: 2,
      question: "¿Cuáles son las opciones de financiamiento disponibles para los jóvenes en Colombia?",
      answer: "Las opciones incluyen créditos educativos, préstamos bancarios, microcréditos y financiamiento a través de programas gubernamentales dirigidos a jóvenes emprendedores."
    },
    {
      id: 3,
      question: "¿Cómo se compone el sistema financiero Colombiano?",
      answer: "El sistema financiero colombiano se compone de bancos comerciales, bancos de desarrollo, corporaciones financieras, cooperativas financieras, entidades aseguradoras, fondos de pensiones y cesantías, bolsa de valores y la Superintendencia Financiera, que actúa como regulador y supervisor del sistema."
    },
    {
      id: 4,
      question: "¿Cuáles son los bancos actuales de Colombia?",
      answer: "Los principales bancos en Colombia incluyen el Banco de Bogotá, Banco de Occidente, Banco Popular, Banco Santander, Bancolombia, BBVA Colombia, Davivienda, Banco Caja Social, Banco AV Villas y Citibank Colombia, entre otros."
    },
    {
      id: 5,
      question: "¿Cómo puedo proteger mis finanzas personales y evitar fraudes o estafas financieras?",
      answer: "Mantén tus datos financieros seguros, verifica la autenticidad de las instituciones financieras antes de realizar transacciones y mantente informado sobre las últimas estafas financieras para poder identificarlas y evitarlas."
    }
  ];

  return (
    <main className="preguntas5">
      <h1 className="preguntas-y-respuestas-container">
        <span>Preguntas y Respuestas: </span>
        <span className="educacion-financiera-en">Educación Financiera en Colombia</span>
      </h1>
      <section className="preguntas6">
        {questions.map((q) => (
          <div key={q.id} className={`pregunta ${openQuestions.includes(q.id) ? "open" : ""}`} onClick={() => toggleAnswer(q.id)}>
            <div className="headline">
              <b>{q.question}</b>
              <img
                className={`chevron-down-icon ${openQuestions.includes(q.id) ? "rotate" : ""}`}
                loading="lazy"
                alt="Desplegar"
                src="/public/chevron-down@2x.png"
              />
            </div>
            <div className={`pregunta-child ${openQuestions.includes(q.id) ? "show" : ""}`}>
              <hr className="separator" />
              <div className="respuesta">{q.answer}</div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Pag2;
