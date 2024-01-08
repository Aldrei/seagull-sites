import { styled } from 'styled-components'

import Image from 'next/image'
import Link from 'next/link'

export const Container = styled.div``

export const HeaderWrapper = styled.header`
  height: 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  @media (max-width: 768px) {
  }
`

export const LogoWrapper = styled(Link)``

export const Logo = styled(Image)`
  position: absolute;
  top: 75px;
  max-width: 250px;
  box-shadow: ${props => props.theme.boxShadow.first};
  z-index: 9;
`

export const NavWrapper = styled('div')``

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: ${props => props.theme.spaces.sm};
  border-top: 1px solid ${props => props.theme.color.fifth};

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: inherit;
  text-decoration: none;
  color: black;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  > svg {
    margin-right: calc(${props => props.theme.spaces.xs} / 2);
    font-size: ${props => props.theme.spaces.lg};
    color: inherit;
  }
`

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 111px;
  left: 0;
  right: 0;
  background: #007bff;
  border-top: 1px solid #eaeaea;
  padding: 16px;
  z-index: 9;

  @media (min-width: 769px) {
    display: none;
  }
`

export const CloseIcon = styled.div``

export const Bar = styled.div`
  width: 20px;
  height: 2px;
  background-color: #007bff;
  margin: 4px 0;
`

export const InfosWrapper = styled('ul')`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0;
  right: 0;
  padding: ${props => props.theme.spaces.md} ${props => props.theme.spaces.lg};
`

export const Info = styled('li')`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.theme.color.black};
`

export const InfoLink = styled('a')`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: inherit;

  > svg {
    margin-right: calc(${props => props.theme.spaces.xs} / 2);
    font-size: ${props => props.theme.spaces.lg};
    color: inherit;
  }
`
