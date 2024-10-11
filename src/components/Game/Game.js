import { useState } from "react";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const isWinner = guesses[guesses.length - 1] === answer;
  const isGameOver = guesses.length === NUM_OF_GUESSES_ALLOWED || isWinner;
  const handleGuessSubmit = (guess) => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuesses([...guesses, guess]);
  };

  const handleRestartGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
  };

  return (
    <div>
      {isGameOver &&
        (isWinner ? (
          <WonBanner
            numOfAttempts={guesses.length}
            onRestartGame={handleRestartGame}
          />
        ) : (
          <LostBanner answer={answer} onRestartGame={handleRestartGame} />
        ))}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onGuessSubmit={handleGuessSubmit} isGameOver={isGameOver} />
    </div>
  );
}

export default Game;
