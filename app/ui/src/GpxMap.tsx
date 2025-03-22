import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet-gpx'
import 'leaflet-tilelayer-swiss'

const prefix = 'http://localhost:8001/gxp'

const GpxMap = ({ route }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  console.log(route)
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

      let creadedMarkers = {} 
      for (const segment of route.segments) {
        if (segment.type === 'routeSegment') {
          new L.GPX(`${prefix}/${segment.file}`, {
            async: true,
            polyline_options: { color: 'red' },
            markers: {
              startIcon: '',
              endIcon: '',
            }
          }).on('loaded', (e) => {
            map.fitBounds(e.target.getBounds());
          }).addTo(map);
        }

        else if (segment.type === 'routeStop' && !creadedMarkers[segment.id]) {
          creadedMarkers[segment.id] = true
          const locaiton = segment.target.location.split(",").map(s => Number(s))
          L.marker(L.CRS.EPSG2056.unproject(L.point(locaiton))).addTo(map)
            .bindPopup(segment.target.name)
            .openPopup();

        }
      }

      // // // Add a marker with a popup in Bern


      // L.marker(L.CRS.EPSG2056.unproject(L.point(2650144.905130, 1259839.399965))).addTo(map)
      //    .bindPopup('Brogli Horsefarm Schweiz')
      //    .openPopup();


    }, 100)


  }, [])

  return (
    <div ref={mapContainerRef} style={{ height: '100%', width: '100%', borderRadius: '8px' }} />
  )
}


export default GpxMap
