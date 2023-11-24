import Head from 'next/head'

import { Header } from '@components/template-one/Header'
import { SlideOne } from '@components/template-one/Slide'

interface IProps {
  children?: React.ReactElement
}

export const PropertyPage = ({ children }: IProps) => {
  return (
    <>
      <Head>
        <title>My PROPERTY page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header title="TEMPLATE-ONE" />
      <SlideOne />
    </>
  )
}
