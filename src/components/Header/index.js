import './index.css'

const Header = props => {
  const {timeElapsedInSeconds, score} = props
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <ul className="header-score-container">
        <li className="header-score">
          <p>
            Score: <span>{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="seconds">{timeElapsedInSeconds} sec</p>
        </li>
      </ul>
    </div>
  )
}

export default Header
