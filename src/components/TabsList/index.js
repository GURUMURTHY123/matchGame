import './index.css'

const TabsList = props => {
  const {tabDetails, onChangeActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabBtn = () => {
    onChangeActiveTabId(tabId)
  }

  const activeClassName = isActive ? `tab-button active` : `tab-button`

  return (
    <li className="tab-item">
      <button type="button" className={activeClassName} onClick={onClickTabBtn}>
        <p className="tab-text">{displayText}</p>
      </button>
    </li>
  )
}

export default TabsList
