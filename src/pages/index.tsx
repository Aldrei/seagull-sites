import { HomePage } from '@layouts/index';

import { mockedBanners } from '@/mocks/slide';
import { listGeneralOptions, listStateOptions } from '@/services';
import { IHomeProps } from './types';

export async function getServerSideProps() {
  const dataBanners = [...mockedBanners]

  const [statesOptions, generalOptions] = await Promise.all([
    listStateOptions(),
    listGeneralOptions()
  ]);

  return { props: { 
    slideData: { banners: dataBanners },
    filterOptions: { statesOptions, generalOptions }
  } }
}

export default function Home({ children, slideData, filterOptionsInitial }: IHomeProps) {
  console.log('DEBUG Home page slideData:', slideData);
  console.log('DEBUG Home filterOptionsInitial:', filterOptionsInitial);

  return <HomePage slideData={slideData} filterOptionsInitial={filterOptionsInitial}>{children}</HomePage>
}
