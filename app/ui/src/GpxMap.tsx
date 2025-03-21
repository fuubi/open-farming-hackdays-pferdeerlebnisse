import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet-gpx'

type GpxMapProps = {
  gpxUrl: string // URL to GPX file
}

const GpxMap: React.FC<GpxMapProps> = ({ gpxUrl }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  console.log(gpxUrl)
  console.log("data")
  useEffect(() => {
  const map = L.map(mapContainerRef.current).setView([46.8, 8.2], 8) // Swiss Alps center
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; OpenStreetMap contributors'
     }).addTo(map)

     
       const url = 'https://mpetazzoni.github.io/leaflet-gpx/demo.gpx';
       const options = {
         async: true,
         polyline_options: { color: 'red' },
       };

       const gpx = new L.GPX(url, options).on('loaded', (e) => {
         map.fitBounds(e.target.getBounds());
       }).addTo(map);

  },[])
  // useEffect(() => {
  // console.log("data")
  //   if (mapRef.current || !mapContainerRef.current) return // Prevent duplicate maps

  //   const map = L.map(mapContainerRef.current).setView([46.8, 8.2], 8) // Swiss Alps center
  //   mapRef.current = map

  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; OpenStreetMap contributors'
  //   }).addTo(map)


  //     const url = 'https://mpetazzoni.github.io/leaflet-gpx/demo.gpx';
  //     const options = {
  //       async: true,
  //       polyline_options: { color: 'red' },
  //     };

  //     const gpx = new L.GPX(url, options).on('loaded', (e) => {
  //       map.fitBounds(e.target.getBounds());
  //     }).addTo(map);

  //     console.log(gpx)

  //   const gpxLayer = new (L as any).GPX("http://localhost:8001/gxp/test", {
  //     async: true,
  //     marker_options: {
  //       startIconUrl: 'https://unpkg.com/leaflet-gpx@1.4.0/pin-icon-start.png',
  //       endIconUrl: 'https://unpkg.com/leaflet-gpx@1.4.0/pin-icon-end.png',
  //       shadowUrl: 'https://unpkg.com/leaflet-gpx@1.4.0/pin-shadow.png'
  //     }
  //   }).on('loaded', function (e: any) {
  //     map.fitBounds(e.target.getBounds())
  //   }).addTo(map)

  //   // ✅ Fix: Force resize when window resizes
  //   const handleResize = () => {
  //     setTimeout(() => {
  //       map.invalidateSize()
  //     }, 200) // Delay to prevent UI glitches
  //   }

  //   window.addEventListener('resize', handleResize)
  //   handleResize() // Run once on mount

  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //     map.remove() // Cleanup map on unmount
  //     mapRef.current = null
  //   }
  // }, [gpxUrl, mapRef.current])

  return (
    <div ref={mapContainerRef} style={{ height: '400px', width: '100%', borderRadius: '8px' }} />
  )
}

export default GpxMap
