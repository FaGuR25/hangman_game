import React, { useState } from 'react';
import hangman from '../img/hangman.jpg';
import '../css/main.css';

interface HangmanProps{
    nom: string;
}


export default function Welcome() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1 className="h1">Welcome to Hangman Game!!</h1>
          <h2>Classical Game</h2>
          <img src={hangman} alt="Hangman image" />

          
        </div>
      </div>
    </>
  );
}
