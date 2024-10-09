import { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        name="guess-input"
        value={guess}
        pattern=".{5,}"
        maxLength="5"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
