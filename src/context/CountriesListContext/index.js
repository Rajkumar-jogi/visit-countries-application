import React from 'react'

const CountriesListContext = React.createContext({
  countriesList: [],
  updateCountriesList: () => {},
  updateVisitedCountriesList: () => {},
})

export default CountriesListContext
