import {
  FooterOne,
  GalleryOne,
  Header,
  InfosDetailsOne,
  MapOne,
  TopSectionOne,
} from '@/components/template-one'
import { MoreDetailsOne } from '@/components/template-one/contact/MoreDetails'
import { WhatsAppOne } from '@/components/template-one/contact/Whatsapp'
import { IMAGES } from '@/images'
import Head from 'next/head'
import { GalleryContainer } from './styles'
import { IPropertyPage } from './types'

export const PropertyPage: React.FC<IPropertyPage> = ({ photos, property }) => {
  return (
    <>
      <Head>
        <title>My PROPERTY page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <TopSectionOne property={property} />
      <GalleryContainer>
        <GalleryOne photos={photos} />
      </GalleryContainer>
      <InfosDetailsOne property={property} />
      <WhatsAppOne />
      <MapOne property={property} />
      <MoreDetailsOne />
      <FooterOne />
    </>
  )
}
