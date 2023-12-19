import { CustomerContext } from '@/hooks/useCustomer';
import Link from 'next/link';
import { useContext } from 'react';
import { BusinessInfo, ContactInfo, FooterContainer, Image, Text, Title } from './styles';
import { IFooterCommon } from './types';

export const FooterCommon: React.FC<IFooterCommon> = ({ ...props }): React.ReactElement => {
  const customerData = useContext(CustomerContext)

  return (
    <FooterContainer {...props}>
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
    </FooterContainer>
    )
  };
