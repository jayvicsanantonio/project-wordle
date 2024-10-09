import { useState } from "react";
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
  const handleGuessSubmit = (word) => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuesses([...guesses, { word, id: crypto.randomUUID() }]);
  };

  return (
    <div>
      <GuessResults guesses={guesses} />
      <GuessInput onGuessSubmit={handleGuessSubmit} />
    </div>
  );
}

export default Game;
