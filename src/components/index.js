import React, {useState, useEffect, useCallback} from 'react'

/**
 * Hooks
 */
import useFetchData from '../hooks/useFetchData'

/**
 * Components
 */
import MainCountry from './MainCountry'
import Sidebar from './Sidebar'

const firstMainCountry = 'Georgia'

const App = () => {

  const [response, loading] = useFetchData('statistics')
  const [mainCountry, setMainCountry] = useState(null)

  useEffect(() => {
    if (!loading) {
      setMainCountry(
        response.data.response.find(data => data.country === firstMainCountry)
      )
    }
  }, [loading, response])

  /**
   * Select Main Country Handler
   */
  const mainCountryHandler = useCallback(data => {
    if (mainCountry.country !== data.country) {
      setMainCountry(data)
    }
  }, [mainCountry])

  return (
    <div className="flex">
      <Sidebar
        mainCountry={mainCountryHandler}
        loading={loading}
        response={response}
      />

      <MainCountry
        data={mainCountry}
        loading={loading}
      />
    </div>
  )
}

export default App
