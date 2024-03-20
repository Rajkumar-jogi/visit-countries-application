import './index.css'

const VisitedCountryItem = props => {
  const {countryItem, onHandleVisitedCountryItem} = props
  const {name, id, imageUrl, isVisited} = countryItem

  const onClickRemoveButton = () => {
    onHandleVisitedCountryItem(id)
  }

  return (
    <li className="visited-country-item">
      <img className="thumbnail-image" src={imageUrl} alt="thumbnail" />
      <div className="country-name-button-container">
        <p className="name">{name}</p>
        <button
          type="button"
          className="remove-button"
          onClick={onClickRemoveButton}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
