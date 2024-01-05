import { BoxOne, FilterTabs, GridOne, Header } from '@/components/template-one'
import Head from 'next/head'

import { IPropertiesPageProps } from './types'

import { IMAGES } from '@/images/template-one'
import { FilterContainer, PageContainer, ResultContainer } from './styles'

export const PropertiesPage: React.FC<IPropertiesPageProps> = ({
  data,
  filterOptionsInitial,
}) => {
  const properties = data?.data?.paginate?.data

  return (
    <>
      <Head>
        <title>My PROPERTIES page</title>
        <meta
          property="og:title"
          content="My PROPERTIES TITLE PAGE"
          key="title"
        />
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
