import Head from 'next/head'
import { PropsWithChildren } from 'react'

import {
  BoxOne,
  FilterAdvanced,
  FooterOne,
  Header,
  SlideOne,
  Tab
} from '@/components/template-one'

import { TabType } from '@/components/_common/Tab/types'
import { SearchOne } from '@/components/template-one/filter/Search'
import { IMAGES } from '@/images/template-one'
import { IHomeProps } from '@/pages/types'

import { propertyMock } from '@/mocks/property'
import { FeaturesContainer } from './styles'

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
      <FeaturesContainer>
        <BoxOne property={propertyMock} orientation='row' />
      </FeaturesContainer>
      <FooterOne />
    </>
  )
}
