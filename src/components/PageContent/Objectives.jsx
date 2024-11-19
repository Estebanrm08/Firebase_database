import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig"; 
import { collection, getDocs } from "firebase/firestore";

const Objectives = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [definitions, setDefinitions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTerms = async () => {
      setLoading(true);
      try {
        const terminosRef = collection(db, "terminosFinancieros");
        const querySnapshot = await getDocs(terminosRef);
        const terms = [];
        querySnapshot.forEach((doc) => {
          terms.push({ id: doc.id, ...doc.data() });
        });
        setDefinitions(
          terms.sort((a, b) =>
            a.término.toLowerCase().localeCompare(b.término.toLowerCase())
          )
        ); // Ordenar alfabéticamente
      } catch (err) {
        console.error("Error al obtener los términos:", err);
        setError("No se pudieron cargar los términos.");
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  const handleSearch = () => {
    setError("");

    if (!searchTerm.trim()) {
      setError("Por favor, ingresa un término.");
      setSelectedTerm(null);
      return;
    }

    const foundTerm = definitions.find(
      (item) =>
        item.término.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (foundTerm) {
      setSelectedTerm(foundTerm);
    } else {
      setSelectedTerm(null);
      setError("Término no encontrado.");
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input.trim()) {
      const filteredSuggestions = definitions
        .filter((item) =>
          item.término.toLowerCase().startsWith(input.trim().toLowerCase())
        )
        .slice(0, 20); // Mostrar máximo 5 sugerencias
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }

    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.término);
    setSuggestions([]);
    setSelectedTerm(suggestion);
  };

  return (
    <section className="search-bar-container-wrapper">
      <div className="search-bar-container">
        <h3 className="que-quieres-aprender">¿Qué quieres aprender?</h3>
        <div className="barra-buscar">
          <input
            className="barra-buscar-input"
            type="text"
            placeholder="Ahorros, Crédito, Inversiones..."
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <img
            className="search-icon"
            alt="Search"
            src="./search@2x.png"
            onClick={handleSearch}
          />
        </div>

        {suggestions.length > 0 && (
          <div className="suggestions-container">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.término}
              </div>
            ))}
          </div>
        )}

        {loading && <p className="loading-message">Cargando términos...</p>}
        {error && <p className="error-message">{error}</p>}
        {selectedTerm && (
          <div className="selected-term-container">
            <p>
              <strong>Definición:</strong> {selectedTerm.definición}
            </p>
            <a
              href={selectedTerm.enlace}
              target="_blank"
              rel="noopener noreferrer"
            >
              Descubre más
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Objectives;
