import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet-gpx'
import 'leaflet-tilelayer-swiss'

type GpxMapProps = {
  gpxUrl: string // URL to GPX file
}

const GpxMap: React.FC<GpxMapProps> = ({ gpxUrl }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  console.log(gpxUrl)
  console.log("data")
  useEffect(() => {
    const map = L.map(mapContainerRef.current,
      {
        // Use LV95 (EPSG:2056) projection
        crs: L.CRS.EPSG2056,
      }
    )
    var swissLayer = L.tileLayer.swiss(/* options */);

    swissLayer.addTo(map);

    // Add Swiss layer with default options
    L.tileLayer.swiss().addTo(map);

    // Center the map on Switzerland
    map.fitSwitzerland();

    // Add a marker with a popup in Bern
    L.marker(L.CRS.EPSG2056.unproject(L.point(2600000, 1200000))).addTo(map)
      .bindPopup('Bern')
      .openPopup();

     const options = {
       async: true,
       polyline_options: { color: 'red' },
     };

     new L.GPX(gpxUrl, options).on('loaded', (e) => {
       map.fitBounds(e.target.getBounds());
     }).addTo(map);

  }, [])

  return (
    <div ref={mapContainerRef} style={{ height: '100%', width: '100%', borderRadius: '8px' }} />
  )
}


export default GpxMap
