import Head from 'next/head'
import { PropsWithChildren } from 'react'

import {
  BoxOne,
  FilterTabs,
  FooterOne,
  Header,
  SlideOne,
} from '@/components/template-one'

import { IMAGES } from '@/images/template-one'
import { IHomeProps } from '@/pages/types'

import { propertyMock } from '@/mocks/property'
import { FeaturesContainer, FilterTabsContainer } from './styles'

export const HomePage: React.FC<PropsWithChildren<IHomeProps>> = ({
  slideData,
  filterOptionsInitial,
}: PropsWithChildren<IHomeProps>) => {
  const { banners } = slideData || {}

  return (
    <>
      <Head>
        <title>My HOME page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <SlideOne banners={banners} />
      <FilterTabsContainer>
        <FilterTabs filterOptionsInitial={filterOptionsInitial} />
      </FilterTabsContainer>
      <FeaturesContainer>
        <BoxOne property={propertyMock} orientation="row" />
      </FeaturesContainer>
      <FooterOne />
    </>
  )
}
