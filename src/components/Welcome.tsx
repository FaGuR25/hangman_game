import hangman from '../img/hangman.jpg';
import '../css/main.css';

export default function Welcome(){
    return(
        
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