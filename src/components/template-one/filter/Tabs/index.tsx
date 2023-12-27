
import { FilterAdvanced, Tab } from '@/components/template-one'

import { TabType } from '@/components/_common/Tab/types'
import { SearchOne } from '@/components/template-one/filter/Search'

import { Container } from './styles'

export const Tabs = () => {
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
  ]

  return (
    <Container>
      <Tab tabs={tabs} />
    </Container>
  )
}
