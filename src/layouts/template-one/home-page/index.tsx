import Head from 'next/head'
import { PropsWithChildren } from 'react'

import {
  BoxOne,
  FilterTabs,
  FooterOne,
  Header,
  SlideOne
} from '@/components/template-one'

import { IMAGES } from '@/images/template-one'
import { IHomeProps } from '@/pages/types'

import { AllPropertiesBtn, FeaturesContainer, FilterTabsContainer, ListAllPropertiesBtbContainer } from './styles'

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
        {propertiesFeaturedList?.length && propertiesFeaturedList.map((item, i) => (
          <BoxOne key={String(i)} property={item} orientation="row" />
        ))}
      </FeaturesContainer>
      <ListAllPropertiesBtbContainer>
        <AllPropertiesBtn href={'/c'} title="Conferir todos os imóveis!">Conferir todos os imóveis!</AllPropertiesBtn>
      </ListAllPropertiesBtbContainer>
      <FooterOne />
    </>
  )
}
