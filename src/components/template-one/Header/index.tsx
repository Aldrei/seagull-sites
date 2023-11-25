import React from "react";

import { IPropsHeaderCommon } from "@/components/_common/Header";

import { HeaderStyled } from './styles';

export const Header = (props: IPropsHeaderCommon): React.ReactElement => {
  return (
    <HeaderStyled {...props} title="TEMPLATE TWO" logo={props.logo}>
      {props.children}
    </HeaderStyled>
  )
}
