import React from "react";

function Banner({ status, children, onRestartGame }) {
  return (
    <div className={`banner ${status}`}>
      {children}
      <button className={`restart-game-btn ${status}`} onClick={onRestartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default Banner;
