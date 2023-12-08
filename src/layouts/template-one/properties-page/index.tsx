import { BoxOne, GridOne, } from '@/components/template-one'
import Head from 'next/head'

import { Header } from '@/components/template-one'
import { IPropertiesPageProps } from './types'

import { IMAGES } from '@/images/template-one'

export const PropertiesPage: React.FC<IPropertiesPageProps> = ({ properties }) => {

  return (
    <>
      <Head>
        <title>My PROPERTIES page</title>
        <meta property="og:title" content="My PROPERTIES TITLE PAGE" key="title" />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <GridOne>
        {properties && properties.map((item: any, i: number) => (
          <BoxOne key={String(i)} property={item} />
        ))}
      </GridOne>
    </>
  )
}
