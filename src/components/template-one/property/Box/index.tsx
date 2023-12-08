import React from 'react'

import { BoxStyled } from './styles'
import { IBoxCommonProps } from '@/components/_common/property/Box/types'

export const BoxOne: React.FC<IBoxCommonProps> = ({ property }) => {
  return <BoxStyled property={property} />
}
