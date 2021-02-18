import Map from './components/Map'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      .then(res => setEvents(res.data.events))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return <div>{isLoading ? <h1>Loading data ...</h1> : <Map />}</div>
}

export default App
