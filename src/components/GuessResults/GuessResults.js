import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((value) => {
        return <Guess key={value} word={guesses[value]} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResults;
