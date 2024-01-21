import { IButtonCommon } from '@/components/_common/Button/types'
import React from 'react'
import { ButtonStyled } from './styles'

export const ButtonOne: React.FC<IButtonCommon> = (
  props,
): React.ReactElement => {
  return <ButtonStyled {...props} />
}
