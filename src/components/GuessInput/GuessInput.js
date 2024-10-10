import { useState } from "react";

function GuessInput({ onGuessSubmit, isGameOver }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length === 5) {
      onGuessSubmit(guess);
      setGuess("");
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        name="guess-input"
        value={guess}
        pattern=".{5}"
        maxLength="5"
        disabled={isGameOver}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
