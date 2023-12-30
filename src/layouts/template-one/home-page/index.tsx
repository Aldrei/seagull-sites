import Head from 'next/head'
import { PropsWithChildren } from 'react'

import {
  FilterAdvanced,
  FooterOne,
  Header,
  PropertyRowOne,
  SlideOne,
  Tab,
} from '@/components/template-one'

import { TabType } from '@/components/_common/Tab/types'
import { SearchOne } from '@/components/template-one/filter/Search'
import { IMAGES } from '@/images/template-one'
import { IHomeProps } from '@/pages/types'

export const HomePage: React.FC<
  PropsWithChildren<IHomeProps>
> = ({ slideData }: PropsWithChildren<IHomeProps>) => {
  const { banners } = slideData || {}

  const tabs: TabType[] = [
    {
      id: 0,
      title: 'Tab 1',
      content: <FilterAdvanced />,
    },
    {
      id: 1,
      title: 'Tab 2',
      content: <SearchOne />,
    },
  ]

  return (
    <>
      <Head>
        <title>My HOME page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <SlideOne banners={banners} />
      <Tab tabs={tabs} />
      <PropertyRowOne
        title="CASA ALVENARIA, 2 DORMITÓRIOS, METZLER"
        location="Metzler - Campo Bom"
        description="Ótima casa em bairro nobre pronta para morar, esse imóvel conta com; São 77 m2 de área construída com uma área total de terreno de 150 m2..."
        imageUrl="https://imobmobile.com.br/photos/thumb/b00057c0b108eeb706b560044c885714.jpeg"
        price="Cód CAA002 - R$ 399.000,00"
      />
      <FooterOne />
    </>
  )
}
