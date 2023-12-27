import React from 'react'

import { SelectStyled } from './styles'
import { ISelectCommon } from '@/components/_common/Select/types'

export const SelectOne: React.FC<ISelectCommon> = ({
  options,
}: ISelectCommon): React.ReactElement => {
  return <SelectStyled options={options} />
}
