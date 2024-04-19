import React from 'react';
import Welcome from './components/Welcome';
import Hangman from './components/Hangman';

const words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];
const nombres = ["ana", "maria", "jose", "jesus", "juan", "luis"];
const colores = ["blanco", "negro", "verde", "cafe", "azul", "morado"];
const lenguajes = ["java", "javascript", "html", "css", "php", "python"];
const listas = [words, nombres, colores, lenguajes];

function aleatorio(list) {
  const palabra = Math.floor(Math.random() * list.length);
  return list[palabra];
}

function App() {
  const lista = aleatorio(listas);
  return (
    <div className="App">
      <Welcome wordsList={lista}/>
      {"Lenguajes de Programación"}
      <Hangman words={aleatorio(listas)}/>
    </div>
  );
}

export default App;
