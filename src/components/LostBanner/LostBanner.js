import React from "react";
import Banner from "../Banner";

function LostBanner({ answer, onRestartGame }) {
  return (
    <Banner status="sad" onRestartGame={onRestartGame}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
