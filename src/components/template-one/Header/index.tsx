// import HeaderCommon from "@/components/_common/Header"
import React from "react";

import { HeaderStyled } from './styles'

interface IProps {
  children: React.ReactElement
  title: string
}

export const Header = ({ children, title }: IProps): React.ReactElement => {
  return (
    <HeaderStyled title="TEMPLATE TWO">
      {children}
    </HeaderStyled>
  )
}
