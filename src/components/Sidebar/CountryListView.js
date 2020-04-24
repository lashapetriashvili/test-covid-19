import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CountryListView = ({ mainCountry, loading, data }) => {
  if (loading || data === null) {
    return <Skeleton count={40} height={50} />
  } else {
    return (
      <ul className="sidebar__list">
        {data.map(response =>
          <li key={response.country} className="sidebar__item" onClick={() => mainCountry(response)}>
            <span className="sidebar__item__country">{response.country}</span>
            <span className="sidebar__item__total">{response.cases.total}</span>
          </li>
        )}
      </ul>
    )
  }
}

export default React.memo(CountryListView)
