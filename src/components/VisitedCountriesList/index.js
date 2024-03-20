import VisitedCountryItem from '../VisitedCountryItem'

import './index.css'

import CountriesListContext from '../../context/CountriesListContext'

const VisitedCountrisList = () => {
  return (
    <CountriesListContext.Consumer>
      {value => {
        const {updateVisitedCountriesList, countriesList} = value

        const visitedCountrisList = countriesList.filter(
          country => country.isVisited === true,
        )

        const isVisitedCountriesListEmpty = visitedCountrisList.length === 0

        const onHandleVisitedCountryItem = notVisitedCountryId => {
          updateVisitedCountriesList(notVisitedCountryId)
        }

        const renderEmptyView = () => {
          return (
            <div className="empty-view-container">
              <p className="no-counties-text">No Countries Visited Yet!</p>
            </div>
          )
        }

        return (
          <>
            <h1 className="visited-countris-heading">Visited Countries</h1>
            {isVisitedCountriesListEmpty ? (
              renderEmptyView()
            ) : (
              <ul className="visited-countries-list">
                {visitedCountrisList.map(countryItem => (
                  <VisitedCountryItem
                    countryItem={countryItem}
                    key={countryItem.id}
                    onHandleVisitedCountryItem={onHandleVisitedCountryItem}
                  />
                ))}
              </ul>
            )}
          </>
        )
      }}
    </CountriesListContext.Consumer>
  )
}

export default VisitedCountrisList
