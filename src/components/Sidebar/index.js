import React, {useEffect, useState} from 'react'

import CountryListView from './CountryListView'

const Sidebar = ({response, loading, mainCountry}) => {

  const [data, setData] = useState(null)

  useEffect(() => {
    if (!loading) {
      setData(response.data.response)
    }
  }, [loading, response])

  /**
   * Search Country Handler
   *
   * @param event
   */
  const searchCountryHandler = (event) => {
    const searchedName = event.target.value

    if (searchedName === '') {
      setData(response.data.response)
    } else {
      const result = response.data.response.filter(response => {
        return response.country.toLowerCase().match(searchedName)
      })
      setData(result)
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <input
          className="input sidebar__search__input"
          onChange={e => searchCountryHandler(e)}
          placeholder="search"
          type="text"
        />
      </div>

      <div className="sidebar__country-list">
        <CountryListView
          mainCountry={mainCountry}
          loading={loading}
          data={data}
        />
      </div>
    </div>
  )
}

export default React.memo(Sidebar)
