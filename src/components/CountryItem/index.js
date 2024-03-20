import './index.css'

const CountryItem = props => {
  const {country, onHandleVisitState} = props
  const {name, id, isVisited} = country

  const onClickVisitButton = () => {
    onHandleVisitState(id)
  }

  return (
    <li className="country-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button
          type="button"
          className="visit-button"
          onClick={onClickVisitButton}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
