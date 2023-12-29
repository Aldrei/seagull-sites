import {
  Bar,
  Container,
  HeaderWrapper,
  Logo,
  MenuIcon,
  MobileMenu,
  Nav,
  NavLink
} from './styles'

import React, { useState } from 'react'
import { IHeaderCommon } from './types'

export const HeaderCommon: React.FC<IHeaderCommon> = ({
  title,
  className,
  logo,
  ...props
}): React.ReactElement => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  return (
    <Container className={className} {...props}>
      <HeaderWrapper>
        <Logo src={logo} alt="Logo" />
        <Nav>
          <NavLink href="#">Product</NavLink>
          <NavLink href="#">Features</NavLink>
          <NavLink href="#">Marketplace</NavLink>
          <NavLink href="#">Company</NavLink>
        </Nav>
        <MenuIcon onClick={() => setMenuOpen(!isMenuOpen)}>
          <Bar />
          <Bar />
          <Bar />
        </MenuIcon>
      </HeaderWrapper>
      <MobileMenu $isOpen={isMenuOpen}>
        <NavLink href="#">Product</NavLink>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Marketplace</NavLink>
        <NavLink href="#">Company</NavLink>
      </MobileMenu>
    </Container>
  )
}
