import { HomePage } from '@layouts/index'

import { mockedBanners } from '@/mocks/slide'
import { IHomeProps } from './types'

export async function getServerSideProps() {
  const dataBanners = [...mockedBanners]

  return { props: { slideData: { banners: dataBanners } } }
}

export default function Home({ children, slideData }: IHomeProps) {
  console.log('DEBUG Home page slideData:', slideData)

  return <HomePage slideData={slideData}>{children}</HomePage>
}
