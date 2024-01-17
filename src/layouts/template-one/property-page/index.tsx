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
import { CustomerContext } from '@/hooks/useCustomer'
import { IMAGES } from '@/images'
import { buildCanonicalSeo, buildDescriptionSeo, buildImageSeo, buildTextSeo } from '@/utils'
import Head from 'next/head'
import { useContext } from 'react'
import { GalleryContainer } from './styles'
import { IPropertyPage } from './types'

export const PropertyPage: React.FC<IPropertyPage> = ({ photos, property }) => {
  const { customerData: customer } = useContext(CustomerContext)

  const TITLE = buildTextSeo({ property, separatorChar: ', ', normalize: true })
  const KEYWORDS = buildTextSeo({ property, separatorChar: ', ', normalize: false })
  const CANONICAL = buildCanonicalSeo(customer.seo_canonical_base, property)
  const DESCRIPTION = buildDescriptionSeo(property)
  const IMAGE = buildImageSeo(property)

  console.log('DEBUG KEYWORDS:', KEYWORDS)

  return (
    <>
      <Head>
        <link rel="canonical" href={CANONICAL} />
        <meta name="keywords" content={KEYWORDS} />

        <title>{TITLE}</title>

        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" itemProp="image"  content={IMAGE} />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <TopSectionOne property={property} />
      <GalleryContainer>
        <GalleryOne photos={photos} />
      </GalleryContainer>
      <InfosDetailsOne property={property} />
      <MapOne property={property} />
      <WhatsAppOne />
      <MoreDetailsOne property={property} />
      <FooterOne />
    </>
  )
}
