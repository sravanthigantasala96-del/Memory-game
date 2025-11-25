import React from "react";

function ScoreBoard(props) {
  const { totalMoves, bestScore, stars } = props;
  return (
   <div>
      <div className="score-info">

        {/* Stars Display */}
        <div className="stars">
          {stars.map((star, index) => (
            <span
              key={index}
              style={{ opacity: star }}  // star = 1 (full) or 0.1 (faded)
            >
              ⭐
            </span>
          ))}
        </div>

        <p>
          Moves <span>{totalMoves}</span>
        </p>
        <p>Time 3:05</p>
        <p>Best score: {bestScore === Infinity ? "∞" : bestScore}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
