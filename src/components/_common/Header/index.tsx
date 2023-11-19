import React from 'react'

interface IProps {
  title: string;
  children?: React.ReactElement;
  className?: string;
}

import { HeaderContainer, Title } from './styles'

const Header = ({ title, className }: IProps): React.ReactElement => {
  const navigation = [
    { name: title, href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  return (
    <HeaderContainer className={className}>
      <Title>HeaderContainer INHERITED</Title>
    </HeaderContainer>
  )
}

export default Header;