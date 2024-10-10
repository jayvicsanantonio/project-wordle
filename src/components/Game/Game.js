import { useState } from "react";
import Banner from "../Banner/Banner";
import GuessResults from "../GuessResults/GuessResults";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const isWinner = guesses[guesses.length - 1]?.word === answer;
  const isGameOver = guesses.length === NUM_OF_GUESSES_ALLOWED || isWinner;
  const handleGuessSubmit = (word) => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuesses([...guesses, { word, id: crypto.randomUUID() }]);
  };

  return (
    <div>
      {isGameOver && (
        <Banner
          type={isWinner ? "happy" : "sad"}
          numOfAttempts={guesses.length}
        />
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput onGuessSubmit={handleGuessSubmit} isGameOver={isGameOver} />
    </div>
  );
}

export default Game;
