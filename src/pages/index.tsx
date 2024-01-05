import { HomePage } from '@layouts/index'

import { mockedBanners } from '@/mocks/slide'
import { listPropertiesFiltered } from '@/services'
import { IHomeProps } from './types'

export async function getServerSideProps() {
  /**
   * TODO: Get banner by API...
  */
  const dataBanners = [...mockedBanners]

  const propertiesList = await listPropertiesFiltered('')

  const options = propertiesList?.data?.search?.options
  const selectedOptions = propertiesList?.data?.search?.values_selected

  return {
    props: {
      slideData: { banners: dataBanners },
      filterOptionsInitial: { options, selectedOptions },
    },
  }
}

export default function Home({
  children,
  slideData,
  filterOptionsInitial,
}: IHomeProps) {
  console.log('DEBUG Home page slideData:', slideData)
  console.log('DEBUG Home filterOptionsInitial:', filterOptionsInitial)

  return (
    <HomePage slideData={slideData} filterOptionsInitial={filterOptionsInitial}>
      {children}
    </HomePage>
  )
}
