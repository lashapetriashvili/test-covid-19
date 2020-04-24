import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetchData = (path, params = []) => {

  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/' + path,
        params: params,
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_HOST,
          'x-rapidapi-key': process.env.REACT_APP_KEY
        }
      }).then(response => {
        setResponse(response)
      }).catch(error => {
        setError(error)
      }).finally(() => {
        setLoading(false)
      })
    }

    fetchData()
  }, [path])

  return [response, loading, error]
}

export default useFetchData
