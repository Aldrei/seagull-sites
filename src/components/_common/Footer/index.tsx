import Link from 'next/link'
import { BusinessInfo, ContactInfo, FooterContainer, Title, Text, Image } from './styles'
import useCustomer, { CustomerContext } from '@/hooks/useCustomer'
import { useContext } from 'react'

export const FooterCommon: React.FC = (): React.ReactElement => {
  const customerData = useContext(CustomerContext)

  return (
    <FooterContainer>
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
