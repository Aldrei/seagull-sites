import React from 'react'

import { IHeaderCommon } from '@/components/_common/Header/types'

import { HeaderStyled } from './styles'

export const Header = (props: IHeaderCommon): React.ReactElement => {
  return (
    <HeaderStyled {...props} title="TEMPLATE TWO" logo={props.logo}>
      {props.children}
    </HeaderStyled>
  )
}
