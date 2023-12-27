import React from 'react'
import { MapStyled } from './styles'
import { IMapCommon } from '@/components/_common/Map/types'

export const MapOne: React.FC<IMapCommon> = ({ property }) => {
  return <MapStyled property={property} />
}
