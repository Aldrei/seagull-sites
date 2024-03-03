import { HomePage } from '@layouts/index'

import {
  listBanners,
  listPropertiesFeatured,
  listPropertiesFiltered,
} from '@/services'
import { IHomeProps } from '@/types/pages'

import { gql, useQuery } from '@apollo/client'

const GET_USERS = gql`
  query Query {
    users {
      id
      firstName
      username
    }
  }
`

export async function getServerSideProps() {
  const [propertiesList, bannersList, propertiesFeaturedList] =
    await Promise.all([
      listPropertiesFiltered(''),
      listBanners(),
      listPropertiesFeatured(),
    ])

  const options = propertiesList?.data?.search?.options
  const selectedOptions = propertiesList?.data?.search?.values_selected

  return {
    props: {
      slideData: { banners: bannersList?.data || [] },
      filterOptionsInitial: {
        options: options || {},
        selectedOptions: selectedOptions || {},
      },
      propertiesFeaturedList: propertiesFeaturedList?.data || [],
    },
  }
}

export default function Home({
  children,
  slideData,
  filterOptionsInitial,
  propertiesFeaturedList,
}: IHomeProps) {
  console.log('DEBUG Home page slideData:', slideData)
  console.log('DEBUG Home filterOptionsInitial:', filterOptionsInitial)
  console.log('DEBUG Home propertiesFeaturedList:', propertiesFeaturedList)

  const { loading, error, data } = useQuery(GET_USERS)

  console.log('DEBUG GRAPHQL loading:', loading)
  console.log('DEBUG GRAPHQL error:', error)
  console.log('DEBUG GRAPHQL data:', data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <HomePage
      slideData={slideData}
      filterOptionsInitial={filterOptionsInitial}
      propertiesFeaturedList={propertiesFeaturedList}
    >
      {children}
    </HomePage>
  )
}
