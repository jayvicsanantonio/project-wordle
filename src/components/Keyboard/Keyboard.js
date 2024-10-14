import React from "react";

function Keyboard({ guesses }) {
  const keysMap = new Map();

  for (let i = guesses.length - 1; i >= 0; i--) {
    const guess = guesses[i];
    for (let j = 0; j < guess.length; j++) {
      const letter = guess[j];

      if (keysMap.has(letter.letter)) {
        continue;
      }

      keysMap.set(letter.letter, letter.status);
    }
  }

  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const rows = keys.map((row, index) => (
    <div className="keyboard-row" key={index}>
      {row.map((key) => {
        const status = keysMap.get(key) ?? "";

        return (
          <div className={`keyboard-key ${status}`} key={key}>
            {key}
          </div>
        );
      })}
    </div>
  ));
  return <div className="keyboard">{rows}</div>;
}

export default Keyboard;
