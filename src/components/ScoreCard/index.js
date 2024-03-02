import './index.css'

const ScoreCard = props => {
  const {isWon, onClickPlayAgain, score} = props

  return (
    <div className="score-card">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png"
      />
      <div className="details-section">
        <img
          className="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <h1 className="card">YOUR SCORE</h1>
        <p className="score">{score}</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          <img
            className="reset"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          Play Again
        </button>
      </div>
    </div>
  )
}
export default ScoreCard
