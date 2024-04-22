import { useState } from "react";
import '../css/main.css';

interface HangmanProps{
    words: string[];
    nom: string;
}

const Hangman = ({words, nom}: HangmanProps) => {
    const [selectedWords, setSelectedWord] = useState(words[0]);
    const [guessedLetters, setGuessedLetters] = useState<String[]>([]);
    const [errorCount, setErrorCount] = useState(0);

    const displayWord = selectedWords.split('').map((letter, index) => {
        console.log("selectedWords: ", selectedWords)
        if (guessedLetters.includes(letter)) {
            console.log("guessedLetters: ", guessedLetters)
            return letter;
        } else {
            return ' _ ';
        }
    });

    const handleGuess = (letter: string) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if(!selectedWords.includes(letter)){
                setErrorCount((prev) => prev + 1);
                console.log("setErrorCount: ", setErrorCount)
            }
        }
    };

    const restarGame = () => {
        const newWordIndex = Math.floor(Math.random() * words.length);
        const newWord = words[newWordIndex];
        setSelectedWord(newWord);
        setGuessedLetters([]); //reiniciar las letras adivinadas
        setErrorCount(0);
    };

    return(
        <div>
            <p className='display'>{displayWord.join('')}</p>
           
            <input className='input' maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
            {(displayWord.join('') === selectedWords || errorCount > 5 ) && (
               <button className='SelectNew' onClick={() => {
                restarGame();
                selectedWords(words[Math.floor(Math.random() * words.length)]);
            }}>Selected New Word</button>
            )}
            <div className="contenedor">
            <p className='pista'>La lista trata de {nom}</p>
            <p className='errores'>Cantidad de errores {errorCount}</p>
            {displayWord.join('') === selectedWords && (
                <p className='ganar'>You Won in this round</p>
            )}
            </div>
        </div>
    );


}

export default Hangman;