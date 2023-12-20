import { CustomerContext } from '@/hooks/useCustomer';
import Link from 'next/link';
import { useContext } from 'react';
import { Adornment, BusinessInfo, ContactInfo, CopyContainer, CopyText, FooterContainer, Image, InfosContainer, Text, Title } from './styles';
import { IFooterCommon } from './types';

import * as u from '@/utils'

export const FooterCommon: React.FC<IFooterCommon> = ({ ...props }): React.ReactElement => {
  const customerData = useContext(CustomerContext)

  return (
    <FooterContainer {...props}>
      <InfosContainer>
        <BusinessInfo>
          <Title>HORÁRIOS DE FUNCIONAMENTO</Title>
          <Text>{String(customerData?.times)}</Text>
        </BusinessInfo>

        <ContactInfo>
          <Title>INFORMAÇÕES DE CONTATO</Title>
          <Text>{String(customerData?.social?.phone_1?.desc)}</Text>
          <Link href={`mailto:${String(customerData?.social?.email_1?.desc)}`}>{String(customerData?.social?.email_1?.desc)}</Link>
        </ContactInfo>

        {/* Logo component should be imported and used here */}
        <Image src={String(customerData?.logo)} alt={String(customerData?.name)} />
      </InfosContainer>
      <CopyContainer>
        <Adornment src={customerData?.adornment} />
        <CopyText>©{u.getYear()} - {customerData?.name}</CopyText>
      </CopyContainer>
    </FooterContainer>
  )
};
