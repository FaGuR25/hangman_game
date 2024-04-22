import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Hangman from './components/Hangman';

const words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];
const nombres = ["ana", "maria", "jose", "jesus", "juan", "luis"];
const colores = ["blanco", "negro", "verde", "cafe", "azul", "morado"];
const lenguajes = ["java", "javascript", "html", "css", "php", "python"];
const listas = [words, nombres, colores, lenguajes];

const listaNombre = ["frutas" ,"nombres", "colores" ,"lenguajes"];


function App() {
  const [start, setStart] = useState(false);

  const handleStartGame = () => {
    setStart(true);
  };
  
  return (
    <div className="App">
      <Welcome />
      <Hangman words ={listas[Math.floor(Math.random() * listas.length)]}/>
    </div>
  );
}

export default App;
