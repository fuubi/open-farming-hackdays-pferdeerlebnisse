import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet-gpx'
import 'leaflet-tilelayer-swiss'

type GpxMapProps = {
  gpxUrl: string // URL to GPX file
}

const GpxMap: React.FC<GpxMapProps> = ({ gpxUrl }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const map = L.map(mapContainerRef.current,
      {
        // Use LV95 (EPSG:2056) projection
        crs: L.CRS.EPSG2056,
      }
    )

    setTimeout(() => {
      var swissLayer = L.tileLayer.swiss(/* options */);

      swissLayer.addTo(map);

      // Add Swiss layer with default options
      L.tileLayer.swiss().addTo(map);

      // Center the map on Switzerland
      map.fitSwitzerland();

      // // Add a marker with a popup in Bern
      L.marker(L.CRS.EPSG2056.unproject(L.point(2638332.313276, 1261373.902711))).addTo(map)
          .bindPopup('Stone Ranch')
          .openPopup();

      
      L.marker(L.CRS.EPSG2056.unproject(L.point(2650144.905130, 1259839.399965))).addTo(map)
         .bindPopup('Brogli Horsefarm Schweiz')
         .openPopup();

      const options = {
        async: true,
        polyline_options: { color: 'red' },
        markers: {
          startIcon: '',
          endIcon: '',
        }
      };


      new L.GPX(gpxUrl, options).on('loaded', (e) => {
        map.fitBounds(e.target.getBounds());

      }).addTo(map);

    }, 100)


  }, [])

  return (
    <div ref={mapContainerRef} style={{ height: '100%', width: '100%', borderRadius: '8px' }} />
  )
}


export default GpxMap
