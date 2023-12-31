import React from 'react'

import { IBoxCommon } from '@/components/_common/property/Box/types'
import { BoxStyled } from './styles'

export const BoxOne: React.FC<IBoxCommon> = ({ property, orientation }) => {
  return <BoxStyled property={property} orientation={orientation} />
}
