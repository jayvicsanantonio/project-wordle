import React from "react";

function Banner({ type, numOfAttempts }) {
  return (
    <div className={`banner ${type}`}>
      {type === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numOfAttempts} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
