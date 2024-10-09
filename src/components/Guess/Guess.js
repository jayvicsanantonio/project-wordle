import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className="cell">
          {word[i]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
