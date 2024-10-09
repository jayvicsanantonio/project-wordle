import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span
          key={i}
          className={`cell ${
            word[i] !== " " && checkGuess(word, answer)[i].status
          }`}
        >
          {word[i]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
