import { useState } from "react";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import Keyboard from "../Keyboard";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const currentGuess = guesses[guesses.length - 1]
    ?.map((letter) => letter.letter)
    .join("");
  const isWinner = currentGuess === answer;
  const isGameOver = guesses.length === NUM_OF_GUESSES_ALLOWED || isWinner;
  const handleGuessSubmit = (guess) => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    const guessObj = checkGuess(guess, answer);

    setGuesses([...guesses, guessObj]);
  };

  const handleRestartGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
  };

  return (
    <div className="game-container">
      {isGameOver &&
        (isWinner ? (
          <WonBanner
            numOfAttempts={guesses.length}
            onRestartGame={handleRestartGame}
          />
        ) : (
          <LostBanner answer={answer} onRestartGame={handleRestartGame} />
        ))}
      <GuessResults guesses={guesses} />
      <GuessInput onGuessSubmit={handleGuessSubmit} isGameOver={isGameOver} />
      <Keyboard guesses={guesses} />
    </div>
  );
}

export default Game;
