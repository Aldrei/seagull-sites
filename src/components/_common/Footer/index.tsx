import { CustomerContext } from '@/hooks/useCustomer'
import Link from 'next/link'
import { useContext } from 'react'
import {
  Adornment,
  BusinessInfo,
  ContactInfo,
  CopyContainer,
  CopyText,
  FooterContainer,
  Image,
  InfosContainer,
  Text,
  Title,
} from './styles'
import { IFooterCommon } from './types'

import * as u from '@/utils'

export const FooterCommon: React.FC<IFooterCommon> = ({
  ...props
}): React.ReactElement => {
  const { customerData: customer } = useContext(CustomerContext)

  return (
    <FooterContainer {...props}>
      <InfosContainer>
        <BusinessInfo>
          <Title>HORÁRIOS DE FUNCIONAMENTO</Title>
          <Text>{String(customer?.times)}</Text>
        </BusinessInfo>

        <ContactInfo>
          <Title>INFORMAÇÕES DE CONTATO</Title>
          <Text>{String(customer?.social?.phone_1?.desc)}</Text>
          <Link href={`mailto:${String(customer?.social?.email_1?.desc)}`}>
            {String(customer?.social?.email_1?.desc)}
          </Link>
        </ContactInfo>

        {/* Logo component should be imported and used here */}
        <Image
          src={String(customer?.logo)}
          alt={String(customer?.name)}
        />
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
