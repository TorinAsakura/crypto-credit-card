import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'
import { compose, withProps, withStateHandlers } from 'recompose'
import { StyleSheet } from 'elementum'
import countries from './countries.json'
import Info from './Info'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '300px',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  loading: {
    background: '#ffffff',
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
})

const getLatLng = (code) => {
  const [lat, lng] = (countries[code.toLowerCase()] || [])

  return { lat, lng }
}

const Geography = ({ data = {}, open, zoom = 2, onToggle, onClose }) => (
  <GoogleMap
    defaultZoom={zoom}
    defaultCenter={{ lat: 32.435613, lng: -22.631835 }}
    options={{
      scrollwheel: false,
    }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {Object.keys(data).map(country => (
        <Marker
          key={country}
          position={getLatLng(country)}
          icon={{
            path: 'M-10,0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0',
            fillColor: '#ffffff',
            fillOpacity: 1,
            scale: 1,
            strokeColor: '#E6A70D',
            strokeWeight: 4,
          }}
          onClick={() => onToggle(country)}
        >
          {open === country &&
            <InfoWindow onCloseClick={onClose}>
              <Info
                partners={data[country].partners}
                clients={data[country].clients}
              />
            </InfoWindow>
          }
        </Marker>
      ))}
    </MarkerClusterer>
  </GoogleMap>
)

/* eslint-disable max-len */
const enhance = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDYGnpNDoNQcR-NyXf7o4j83gnqhC4q4Mc',
    containerElement: <div className={styles({ container: true })} />,
    loadingElement: <div className={styles({ loading: true })} />,
    mapElement: <div className={styles({ map: true })} />,
  }),
  withStateHandlers(() => ({
    open: null,
  }), {
    onToggle: ({ open }) => country => ({
      open: open !== country ? country : null,
    }),
    onClose: () => ({
      open: null,
    }),
  }),
  withScriptjs,
  withGoogleMap,
)

export default enhance(Geography)
