
import hangman from "../img/hangman.jpg";
import "../css/main.css";

interface WelcomeProps {
  onStart: () => void; // Definimos la interfaz para onStart
}

export default function Welcome({ onStart }: WelcomeProps) {
  // Recibimos onStart como prop
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1 className="h1">Welcome to Hangman Game!!</h1>
          <h2>Classical Game</h2>
          <img src={hangman} alt="Hangman image" />
          <div>
            <button className="boton" onClick={onStart}>
              Start Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
