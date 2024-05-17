import './index.css'

const BrowserHistory = props => {
  const {itemList, onDeleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemList
  const onDelete = () => {
    onDeleteListItem(id)
  }
  return (
    <li>
      <div className="li-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="logo" />
        <h1>{title}</h1>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button onClick={onDelete} data-testid="delete">
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
