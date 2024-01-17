import {
  Bar,
  Container,
  HeaderWrapper,
  Info,
  InfoLink,
  InfosWrapper,
  Logo,
  LogoWrapper,
  MenuIcon,
  MobileMenu,
  Nav,
  NavLink,
  NavWrapper,
} from './styles'

import useCustomer from '@/hooks/useCustomer'
import React, { Fragment, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IHeaderCommon } from './types'

export const HeaderCommon: React.FC<IHeaderCommon> = ({
  title,
  className,
  logo,
  ...props
}): React.ReactElement => {
  const { customerData: customer, menuData } = useCustomer()

  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <Container className={className} {...props}>
      <HeaderWrapper>
        <LogoWrapper href={'/'} title='Ir para Home page'>
          <Logo src={customer.logo} alt="Logo" />
        </LogoWrapper>
        <NavWrapper>
          {customer.social?.whatsapp?.desc && (
            <InfosWrapper>
              <Info>
                <InfoLink>
                  <FaWhatsapp
                    href={customer.social?.whatsapp?.link}
                    title={customer.social?.whatsapp?.alt}
                  />{' '}
                  {customer.social?.whatsapp?.desc}
                </InfoLink>
              </Info>
            </InfosWrapper>
          )}
          {menuData.length && (
            <Fragment>
              <Nav>
                {menuData.map((item, i) => (
                  <NavLink
                    key={String(i)}
                    target={item.link_external ? '_blank' : '_self'}
                    href={item.link_external || item.link}
                    title={item.title}
                  >
                    {item.icon} {item.desc}
                  </NavLink>
                ))}
              </Nav>
              <MenuIcon onClick={() => setMenuOpen(!isMenuOpen)}>
                <Bar />
                <Bar />
                <Bar />
              </MenuIcon>
            </Fragment>
          )}
        </NavWrapper>
      </HeaderWrapper>
      {menuData.length && (
        <MobileMenu $isOpen={isMenuOpen}>
          {menuData.map((item, i) => (
            <NavLink
              key={String(i)}
              target={item.link_external ? '_blank' : '_self'}
              href={item.link_external || item.link}
              title={item.title}
            >
              {item.desc}
            </NavLink>
          ))}
        </MobileMenu>
      )}
    </Container>
  )
}
