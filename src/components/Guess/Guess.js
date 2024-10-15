import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((value) => (
        <Cell
          key={value}
          letter={word?.[value]?.letter}
          status={word?.[value]?.status}
        />
      ))}
    </p>
  );
}

export default Guess;
