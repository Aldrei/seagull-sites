import { Bar, CloseIcon, HeaderWrapper, Logo, MenuIcon, MobileMenu, Nav, NavLink } from './styles'

import React, { useState } from 'react'

interface IProps {
  title: string;
  children?: React.ReactElement;
  className?: string;
}


const Header = ({ title, className }: IProps): React.ReactElement => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  return (
    <>
      <HeaderWrapper>
        <Logo src="/path-to-your-logo.png" alt="Logo" />
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
        <CloseIcon onClick={() => setMenuOpen(false)}>X</CloseIcon>
        <NavLink href="#">Product</NavLink>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Marketplace</NavLink>
        <NavLink href="#">Company</NavLink>
      </MobileMenu>
    </>
  );
}

export default Header;