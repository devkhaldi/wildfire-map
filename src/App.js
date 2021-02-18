import Map from './components/Map'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    axios
      .get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      .then(res => setEvents(res))
      .catch(err => console.log(err))
  }, [])

  console.log(events)

  return (
    <div>
      <Map />
    </div>
  )
}

export default App
