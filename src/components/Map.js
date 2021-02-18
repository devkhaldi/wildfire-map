import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ events, center, zoom }) => {
  console.log(events)
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
              />
            )
        )}
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: { lat: 42.3265, lng: -122.8756 },
  zoom: 6,
}

export default Map
