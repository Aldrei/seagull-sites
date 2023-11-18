"use client"

import React from 'react'

interface IProps {
  title: string;
  children: React.ReactElement
}

import { HeaderContainer } from './styles'

const Header = ({ title }: IProps): React.ReactElement => {
  const navigation = [
    { name: title, href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

  return (
    <HeaderContainer />
  )
}

export default Header;