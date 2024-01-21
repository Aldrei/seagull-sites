import Head from 'next/head'
import { PropsWithChildren, useContext } from 'react'

import {
  BoxOne,
  FilterTabs,
  FooterOne,
  Header,
  SlideOne,
} from '@/components/template-one'

import { IMAGES } from '@/images/template-one'
import { IHomeProps } from '@/types/pages'

import { CustomerContext } from '@/hooks/useCustomer'
import {
  AllPropertiesBtn,
  FeaturesContainer,
  FilterTabsContainer,
  ListAllPropertiesBtbContainer,
} from './styles'

export const HomePage: React.FC<PropsWithChildren<IHomeProps>> = ({
  slideData,
  filterOptionsInitial,
  propertiesFeaturedList,
}: PropsWithChildren<IHomeProps>) => {
  const { customerData: customer } = useContext(CustomerContext)

  const { banners } = slideData || {}

  /**
   * TODO: Improve SEO:
   *
   *       1. Implement friendly URL.
   *       2. Implement dynamic meta tags.
   */
  const TITLE =
    `${customer.name} - ${process.env.NEXT_PUBLIC_SEO_HOME_TITLE}`.toUpperCase()
  const KEYWORDS =
    process.env.NEXT_PUBLIC_SEO_HOME_KEYWORDS?.toString()?.toUpperCase()
  const CANONICAL = customer.seo_canonical_base
  const DESCRIPTION =
    `${customer.name} ${process.env.NEXT_PUBLIC_SEO_HOME_DESCRIPTION}`.toUpperCase()
  const IMAGE = customer.logo

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
        <meta property="og:image" itemProp="image" content={IMAGE} />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <SlideOne banners={banners} />
      <FilterTabsContainer>
        <FilterTabs filterOptionsInitial={filterOptionsInitial} />
      </FilterTabsContainer>
      <FeaturesContainer>
        {propertiesFeaturedList?.length &&
          propertiesFeaturedList.map((item, i) => (
            <BoxOne key={String(i)} property={item} orientation="row" />
          ))}
      </FeaturesContainer>
      <ListAllPropertiesBtbContainer>
        <AllPropertiesBtn href={'/c'} title="Conferir todos os imóveis!">
          Conferir todos os imóveis!
        </AllPropertiesBtn>
      </ListAllPropertiesBtbContainer>
      <FooterOne />
    </>
  )
}
