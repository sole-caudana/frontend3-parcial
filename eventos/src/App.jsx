
import React, { useState } from "react";
import Card from "./Card";
import './App.css';

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (input1.trim().length < 3 || input1.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (input2.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    setError("");
    setShowCard(true);
  };

  return (
    <div className="App">
      <h1>Registrá a tu Mascota :)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
        </div>
        <div>
          <label>Raza:</label>
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {showCard  && <Card   name={input1} description={input2} />}
    </div>
  );
}

export default App;


