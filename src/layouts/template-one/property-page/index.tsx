import { FooterOne , GalleryOne, Header, InfosDetailsOne, MapOne } from '@/components/template-one'
import { MoreDetailsOne } from '@/components/template-one/contact/MoreDetails'
import { WhatsAppOne } from '@/components/template-one/contact/Whatsapp'
import { IMAGES } from '@/images'
import Head from 'next/head'
import { IPropertyPage } from './types'

export const PropertyPage: React.FC<IPropertyPage> = ({ photos, property }) => {
  return (
    <>
      <Head>
        <title>My PROPERTY page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <InfosDetailsOne property={property} />
      <WhatsAppOne />
      <GalleryOne photos={photos} />
      <MapOne property={property} />
      <MoreDetailsOne />
      <FooterOne />
    </>
  )
}
