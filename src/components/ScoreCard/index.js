import './index.css'

const ScoreCard = props => {
  const {score, restartGame} = props
  return (
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="score-heading">Your Score</p>
      <p className="final-score">{score}</p>
      <button type="button" className="play-again-btn" onClick={restartGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="play-again-img"
        />
        <p className="play-again-text">Play Again</p>
      </button>
    </div>
  )
}

export default ScoreCard
