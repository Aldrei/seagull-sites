import { BoxOne, FilterTabs, GridOne, Header } from '@/components/template-one'
import Head from 'next/head'

import { IPropertiesPageProps } from './types'

import { CustomerContext } from '@/hooks/useCustomer'
import { IMAGES } from '@/images/template-one'
import { useContext } from 'react'
import { FilterContainer, PageContainer, ResultContainer } from './styles'

export const PropertiesPage: React.FC<IPropertiesPageProps> = ({
  data,
  filterOptionsInitial,
}) => {
  const { customerData: customer } = useContext(CustomerContext)

  const properties = data?.data?.paginate?.data

  /**
   * TODO: Improve SEO:
   *        
   *       1. Implement friendly URL.
   *       2. Implement dynamic meta tags.
  */
  const TITLE = `${customer.name} - ${process.env.NEXT_PUBLIC_SEO_CATEGORIES_TITLE}`.toUpperCase()
  const KEYWORDS = process.env.NEXT_PUBLIC_SEO_CATEGORIES_KEYWORDS?.toString()?.toUpperCase()
  const CANONICAL = `${customer.seo_canonical_base}/c`
  const DESCRIPTION = `${customer.name} ${process.env.NEXT_PUBLIC_SEO_CATEGORIES_DESCRIPTION}`.toUpperCase()
  const IMAGE = `${customer.logo}`

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
      <PageContainer>
        <FilterContainer>
          <FilterTabs filterOptionsInitial={filterOptionsInitial} />
        </FilterContainer>
        <ResultContainer>
          <GridOne>
            {properties &&
              properties.map((item: any, i: number) => (
                <BoxOne key={String(i)} property={item} />
              ))}
          </GridOne>
        </ResultContainer>
      </PageContainer>
    </>
  )
}
