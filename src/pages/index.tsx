import { HomePage } from '@layouts/index'

import {
  listBanners,
  listPropertiesFeatured,
  listPropertiesFiltered,
} from '@/services'
import { IHomeProps } from '@/types/pages'

import { initializeApollo } from '@/config/gql'
import { gql } from '@apollo/client'

const GET_USERS = gql`
  query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`

export async function getServerSideProps(ctx: any) {
  const client = initializeApollo()
  // await getDataFromTree(SsrPage) (not working: see bug report)
  const { data } = await client.query({ query: GET_USERS })

  // const { locale } = ctx
  // const documentProps = addApolloState(client, {
  //     props: {...(await serverSideTranslations(locale || '', ['header', 'complaintList', 'footer'], {
  //       i18n: {
  //         defaultLocale: 'en',
  //         locales: ['en'],
  //       },
  //     }))},
  // })

  const [propertiesList, bannersList, propertiesFeaturedList] =
    await Promise.all([
      listPropertiesFiltered(''),
      listBanners(),
      listPropertiesFeatured(),
    ])

  const options = propertiesList?.data?.search?.options
  const selectedOptions = propertiesList?.data?.search?.values_selected

  // Will be passed to the page component as props
  // return {props: documentProps.props}

  return {
    props: {
      slideData: { banners: bannersList?.data || [] },
      filterOptionsInitial: {
        options: options || {},
        selectedOptions: selectedOptions || {},
      },
      propertiesFeaturedList: propertiesFeaturedList?.data || [],
      qglData: {
        // documentProps,
        data,
      },
    },
  }
}

export default function Home({
  children,
  slideData,
  filterOptionsInitial,
  propertiesFeaturedList,
  gqlData,
}: IHomeProps) {
  console.log('DEBUG Home page slideData:', slideData)
  console.log('DEBUG Home filterOptionsInitial:', filterOptionsInitial)
  console.log('DEBUG Home propertiesFeaturedList:', propertiesFeaturedList)

  console.log('DEBUG GRAPHQL qglData:', gqlData)

  // const { loading, error, data } = useQuery(GET_USERS)

  // console.log('DEBUG GRAPHQL loading:', loading)
  // console.log('DEBUG GRAPHQL error:', error)
  // console.log('DEBUG GRAPHQL data:', data)

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error: {error.message}</p>

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
