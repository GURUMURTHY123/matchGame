import './index.css'

const AppItem = props => {
  const {imageDetails, checkCorrectlyMatched} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    checkCorrectlyMatched(id)
  }

  return (
    <li className="app-item">
      <button
        type="button"
        className="app-image-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="app-image" />
      </button>
    </li>
  )
}

export default AppItem
