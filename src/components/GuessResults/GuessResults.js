import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((guessResult) => (
        <span className="guess" key={guessResult.id}>
          {guessResult.guess}
        </span>
      ))}
    </div>
  );
}

export default GuessResults;
