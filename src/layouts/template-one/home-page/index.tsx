import Head from 'next/head'
import { PropsWithChildren } from 'react'

import { Tab } from '@/components/template-one'
import { Header } from '@components/template-one'
import { SlideOne } from '@components/template-one'

import { TabType } from '@/components/_common/Tab/types'
import { FilterAdvanced } from '@/components/template-one'
import { SearchOne } from '@/components/template-one/filter/Search'
import { IMAGES } from '@/images/template-one'

interface IProps {}

export const HomePage: React.FC<PropsWithChildren<IProps>> = ({}: PropsWithChildren<IProps>) => {
  const tabs: TabType[] = [
    {
      id: 0,
      title: 'Tab 1',
      content: <FilterAdvanced />,
    },
    {
      id: 1,
      title: 'Tab 2',
      content: <SearchOne />,
    },
  ];

  return (
    <>
      <Head>
        <title>My HOME page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <SlideOne />
      <Tab tabs={tabs} />
    </>
  )
}
