import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfAttempts }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfAttempts} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
