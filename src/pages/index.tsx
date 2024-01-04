import { HomePage } from '@layouts/index';

import { mockedBanners } from '@/mocks/slide';
import { listGeneralOptions, listStateOptions } from '@/services';
import { IGlobalPage } from '@/types/pages';
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

export default function Home({ children, slideData, filterOptions }: IHomeProps & IGlobalPage) {
  console.log('DEBUG Home page slideData:', slideData);
  console.log('DEBUG Home filterOptions:', filterOptions);

  return <HomePage slideData={slideData} filterOptions={filterOptions}>{children}</HomePage>
}
