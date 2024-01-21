import { HomePage } from '@layouts/index'

import {
  listBanners,
  listPropertiesFeatured,
  listPropertiesFiltered,
} from '@/services'
import { IHomeProps } from '@/types/pages'

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
      filterOptionsInitial: { options, selectedOptions },
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
