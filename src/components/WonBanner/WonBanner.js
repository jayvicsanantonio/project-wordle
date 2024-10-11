import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfAttempts, onRestartGame }) {
  return (
    <Banner status="happy" onRestartGame={onRestartGame}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfAttempts === 1 ? "1 guess" : `${numOfAttempts} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
