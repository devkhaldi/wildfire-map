import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocaionInfoBox'
import { useState } from 'react'

const Map = ({ events, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB1PLChKcIvFh5WUqY4gI-NWWqQLZxLhrg' }}
        defaultCenter={center}
        defaultZoom={zoom}>
        {events.map(
          event =>
            event.categories[0].title == 'Wildfires' && (
              <LocationMarker
                key={event.id}
                lat={event.geometries[0].coordinates[1]}
                lng={event.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: event.id, title: event.title })}
              />
            )
        )}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: { lat: 42.3265, lng: -122.8756 },
  zoom: 6,
}

export default Map
