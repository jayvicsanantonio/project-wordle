import { useState } from "react";

function GuessInput({ onGuessSubmit, isGameOver }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    onGuessSubmit(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        type="text"
        id="guess-input"
        name="guess-input"
        value={guess}
        pattern="[a-zA-Z]{5}"
        minLength="5"
        maxLength="5"
        title="5 letter word"
        disabled={isGameOver}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
