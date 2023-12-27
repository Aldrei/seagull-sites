import dynamic from 'next/dynamic'
import React from 'react'
import { MapWrapper } from './styles'
import { IMapCommon } from './types'

import 'leaflet/dist/leaflet.css'

export const MapCommon: React.FC<IMapCommon> = ({
  property,
  ...props
}): any => {
  /**
   * Leaflet Maps.
   * https://leafletjs.com/download.html
   *
   * React Leaflet Maps.
   * https://react-leaflet.js.org/docs/start-installation/
   */
  const MapContainer = dynamic(
    () => import('react-leaflet').then(module => module.MapContainer),
    { ssr: false },
  )
  const TileLayer = dynamic(
    () => import('react-leaflet').then(module => module.TileLayer),
    { ssr: false },
  )
  const Circle = dynamic(
    () => import('react-leaflet').then(module => module.Circle),
    { ssr: false },
  )

  if (!property.sitePublicarMapa || !property.latitude || !property.longitude)
    return null

  return (
    <MapWrapper {...props}>
      <MapContainer
        center={[Number(property.latitude), Number(property.longitude)]}
        zoom={Number(property.zoom)}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Circle
          center={[Number(property.latitude), Number(property.longitude)]}
          fillColor="#829FD9"
          radius={500}
        />
      </MapContainer>
    </MapWrapper>
  )
}
