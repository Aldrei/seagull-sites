import { IGridCommonProps } from '@/components/_common/property/Grid/types'
import React, { PropsWithChildren } from 'react'
import { GridStyled } from './styles'

export const GridOne: React.FC<PropsWithChildren<IGridCommonProps>> = ({ children }) => {
  return (
    <GridStyled>{children}</GridStyled>
  )
}