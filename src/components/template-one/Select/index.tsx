import React from 'react'

import { SelectStyled } from './styles'
import { ISelect } from '@/components/_common/Select/types'

export const SelectOne: React.FC<ISelect> = ({ options }: ISelect): React.ReactElement => {
  return (
    <SelectStyled options={options} />
  )
}