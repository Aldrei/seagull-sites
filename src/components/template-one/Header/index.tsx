import HeaderCommon from "@/components/_common/Header"
import React from "react";

interface IProps {
  children: React.ReactElement
  title: string
}

const Header = ({ children, title }: IProps): React.ReactElement => {
  return (
    <HeaderCommon title="TEMPLATE ONE">
      {children}
    </HeaderCommon>
  )
}

export default Header;