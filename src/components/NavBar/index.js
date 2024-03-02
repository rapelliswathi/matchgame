import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, score} = props
  return (
    <nav className="nav-bar-container">
      <div className="tittle-with-score-container">
        <div className="logo-and-tittle-container">
          <img
            className="image-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="score">{currentScore}</p>
            <img
              className="timer"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="sec">sec</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
