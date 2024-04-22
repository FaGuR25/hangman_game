import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Hangman from './components/Hangman';

//listas
const words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];
const nombres = ["ana", "maria", "jose", "jesus", "juan", "luis"];
const colores = ["blanco", "negro", "verde", "cafe", "azul", "morado"];
const lenguajes = ["java", "javascript", "html", "css", "php", "python"];

//lista para la pista [hint]
const listas = [words, nombres, colores, lenguajes];

function App() {
  const [start, setStart] = useState(false); // Declaramos la variable start y su función para cambiarla

  return (
    <div className="App">
      {/* Evaluamos si start es true */}
      {start ? (
        <Hangman words={listas[Math.floor(Math.random() * listas.length)]} />
      ) : (
        <Welcome onStart={() => setStart(true)} /> 
      )}
    </div>
  );
}

export default App;
