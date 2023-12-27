import React from 'react'
import { InfosDetailsStyled } from './styles'
import { IInfosDetailsCommon } from '@/components/_common/property/details/Infos/types'

export const InfosDetailsOne: React.FC<IInfosDetailsCommon> = ({
  property,
}) => {
  return <InfosDetailsStyled property={property} />
}
