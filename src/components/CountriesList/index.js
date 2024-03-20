import CountryItem from '../CountryItem'
import CountriesListContext from '../../context/CountriesListContext'

import './index.css'

const CountriesList = () => (
  <CountriesListContext.Consumer>
    {value => {
      const {updateCountriesList, countriesList} = value

      const onHandleVisitState = vistedCountryId => {
        updateCountriesList(vistedCountryId)
      }

      return (
        <>
          <h1 className="countries-heading">Countries</h1>
          <ul className="countries-list-container">
            {countriesList.map(country => (
              <CountryItem
                country={country}
                key={country.id}
                onHandleVisitState={onHandleVisitState}
              />
            ))}
          </ul>
        </>
      )
    }}
  </CountriesListContext.Consumer>
)

export default CountriesList
