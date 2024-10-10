import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((value) => (
        <Cell
          key={value}
          letter={word?.[value]}
          status={result?.[value]?.status}
        />
      ))}
    </p>
  );
}

export default Guess;
