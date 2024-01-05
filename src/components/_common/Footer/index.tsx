import { CustomerContext } from '@/hooks/useCustomer'
import React, { useContext } from 'react'
import {
  Adornment,
  BusinessInfo,
  ContactInfo,
  CopyContainer,
  CopyText,
  FooterContainer,
  Image,
  InfosContainer,
  Link,
  LogoContainer,
  Text,
  Title,
} from './styles'
import { IFooterCommon } from './types'

import { MdChat, MdWatchLater } from 'react-icons/md'

import * as u from '@/utils'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export const FooterCommon: React.FC<IFooterCommon> = ({
  ...props
}): React.ReactElement => {
  const { customerData: customer, contactList } = useContext(CustomerContext)

  console.log('DEBUG contactList:', contactList)

  const renderContactInfo = () => {
    if (contactList?.length)
      return contactList.map((item, i) => {
        if (item?.link_external)
          return (
            <Link
              key={String(i)}
              href={`mailto:${String(customer?.social?.email_1?.desc)}`}
            >
              <FaEnvelope /> {String(customer?.social?.email_1?.desc)}
            </Link>
          )
        return (
          <Text key={String(i)}>
            <FaPhoneAlt /> {String(customer?.social?.phone_1?.desc)}
          </Text>
        )
      })

    return null
  }

  return (
    <FooterContainer {...props}>
      <InfosContainer>
        <BusinessInfo>
          <Title>
            <MdWatchLater />
            HORÁRIOS DE FUNCIONAMENTO
          </Title>
          <Text>{String(customer?.infos?.times)}</Text>
        </BusinessInfo>
        <ContactInfo>
          <Title>
            <MdChat />
            INFORMAÇÕES DE CONTATO
          </Title>
          {renderContactInfo()}
        </ContactInfo>
        <LogoContainer>
          <Image src={String(customer?.logo)} alt={String(customer?.name)} />
        </LogoContainer>
      </InfosContainer>
      <CopyContainer>
        <Adornment src={customer?.adornment} />
        <CopyText>
          ©{u.getYear()} - {customer?.name}
        </CopyText>
      </CopyContainer>
    </FooterContainer>
  )
}
