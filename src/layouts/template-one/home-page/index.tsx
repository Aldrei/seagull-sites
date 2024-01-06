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

import { FeaturesContainer, FilterTabsContainer } from './styles'

export const HomePage: React.FC<PropsWithChildren<IHomeProps>> = ({
  slideData,
  filterOptionsInitial,
  propertiesFeaturedList
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
        {propertiesFeaturedList?.length && propertiesFeaturedList.map((item) => (
          <BoxOne property={item} orientation="row" />
        ))}
      </FeaturesContainer>
      <FooterOne />
    </>
  )
}
