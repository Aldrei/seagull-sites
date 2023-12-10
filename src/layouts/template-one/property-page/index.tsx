import { GalleryOne, Header } from '@/components/template-one'
import { WhatsAppOne } from '@/components/template-one/contact/Whatsapp'
import { IMAGES } from '@/images'
import Head from 'next/head'
import { PhotoProps } from 'react-photo-gallery'

interface IProps {
  children?: React.ReactElement
  photos?: PhotoProps[]
}

export const PropertyPage = ({ photos }: IProps) => {
  return (
    <>
      <Head>
        <title>My PROPERTY page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <WhatsAppOne />
      <GalleryOne photos={photos} />
    </>
  )
}
