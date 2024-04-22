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

const pistas = ["frutas", "nombres comunes de México", "colores", "lenguajes de programacion"]

function App() {
  const [start, setStart] = useState(false); // Declaramos la variable start y su función para cambiarla
  const numero = Math.floor(Math.random() * listas.length);
  return (
    <div className="App">
      
      {start ? (
        <Hangman words={listas[numero]} nom={pistas[numero]} />
      ) : (
        <Welcome onStart={() => setStart(true)} /> 
      )}
    </div>
  );
}

export default App;
