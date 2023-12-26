import React from 'react'

import { BoxStyled } from './styles'
import { IBoxCommon } from '@/components/_common/property/Box/types'

export const BoxOne: React.FC<IBoxCommon> = ({ property }) => {
  return <BoxStyled property={property} />
}
