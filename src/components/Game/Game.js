import { useState } from "react";
import GuessResults from "../GuessResults/GuessResults";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const handleGuessSubmit = (guess) => {
    setGuessResults([...guessResults, { guess, id: crypto.randomUUID() }]);
  };

  return (
    <div>
      <GuessResults guessResults={guessResults} />
      <GuessInput onGuessSubmit={handleGuessSubmit} />
    </div>
  );
}

export default Game;
