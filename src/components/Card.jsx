const Card = ({ id, isFlipped, isMatched, onClick, image, level }) => {
  const flipped = isFlipped || isMatched;

  return (
    <div className={`card ${flipped ? "is-flipped" : ""}`}>
      <div className="card-inner">
        <div
          className={`card-front frontCard-${level} ${isMatched ? "matched" : ""}`}
          onClick={() => onClick(id)}
        />

        <div className={`card-back backCard ${isMatched ? "matched" : ""}`}>
          <img src={image} alt="card" />
        </div>
      </div>
    </div>
  );
};

export default Card;
