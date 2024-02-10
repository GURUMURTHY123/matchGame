import {Component} from 'react'
import Header from '../Header'
import TabsList from '../TabsList'
import AppItem from '../AppItem'
import ScoreCard from '../ScoreCard'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)

    const {tabsList, imagesList} = this.props

    this.state = {
      activeTabId: tabsList[0].tabId,
      activeImageId: imagesList[0].id,
      timeElapsedInSeconds: 60,
      score: 0,
      isGameInProgress: true,
    }
  }

  componentDidMount() {
    this.startGame()
  }

  clearTimer = () => {
    clearInterval(this.timerId)
  }

  startGame = () => {
    this.timerId = setInterval(this.startTimer, 1000)
  }

  startTimer = () => {
    let {timeElapsedInSeconds} = this.state
    if (timeElapsedInSeconds > 0) {
      timeElapsedInSeconds -= 1
      timeElapsedInSeconds =
        timeElapsedInSeconds < 10
          ? `0${timeElapsedInSeconds}`
          : timeElapsedInSeconds
      this.setState({timeElapsedInSeconds})
    } else {
      this.setState({isGameInProgress: false}, this.clearTimer())
    }
  }

  getActiveImageUrl = activeImageId => {
    const {imagesList} = this.props
    const activeImageObject = imagesList.find(
      eachImage => eachImage.id === activeImageId,
    )
    return activeImageObject.imageUrl
  }

  onChangeActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  getNewImageId = () => {
    const {imagesList} = this.props
    const imageId = imagesList[Math.floor(Math.random() * imagesList.length)].id
    return imageId
  }

  checkCorrectlyMatched = imageId => {
    const {activeImageId, score} = this.state
    if (activeImageId === imageId) {
      const updateImageId = this.getNewImageId()
      const newScore = score + 1
      this.setState({activeImageId: updateImageId, score: newScore})
    } else {
      this.clearTimer()
      this.setState({isGameInProgress: false})
    }
  }

  restartGame = () => {
    this.setState({timeElapsedInSeconds: 60, isGameInProgress: true, score: 0})
    this.startGame()
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {
      activeTabId,
      activeImageId,
      timeElapsedInSeconds,
      score,
      isGameInProgress,
    } = this.state
    const activeImageUrl = this.getActiveImageUrl(activeImageId)
    const appImagesList = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )

    return (
      <div className="app-container">
        <Header timeElapsedInSeconds={timeElapsedInSeconds} score={score} />
        <div className="app-body">
          {isGameInProgress ? (
            <div>
              <img src={activeImageUrl} alt="match" className="match-image" />
              <ul className="tab-list-container">
                {tabsList.map(eachTab => (
                  <TabsList
                    key={eachTab.tabId}
                    tabDetails={eachTab}
                    onChangeActiveTabId={this.onChangeActiveTabId}
                    isActive={eachTab.tabId === activeTabId}
                  />
                ))}
              </ul>
              <ul className="app-items-container">
                {appImagesList.map(eachImage => (
                  <AppItem
                    imageDetails={eachImage}
                    key={eachImage.id}
                    checkCorrectlyMatched={this.checkCorrectlyMatched}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="score-card-container">
              <ScoreCard score={score} restartGame={this.restartGame} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MatchGame
