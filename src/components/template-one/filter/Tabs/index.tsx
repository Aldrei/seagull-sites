import { FilterAdvanced, Tab } from '@/components/template-one'

import { TabType } from '@/components/_common/Tab/types'
import { SearchOne } from '@/components/template-one/filter/Search'

import { Container } from './styles'
import { ITabsOne } from './types'

export const Tabs: React.FC<ITabsOne> = ({ filterOptionsInitial }) => {
  const tabs: TabType[] = [
    {
      id: 0,
      title: 'Filtrar Imóveis',
      content: <FilterAdvanced filterOptionsInitial={filterOptionsInitial} />,
    },
    {
      id: 1,
      title: 'Código do Imóvel',
      content: <SearchOne />,
    },
  ]

  return (
    <Container>
      <Tab tabs={tabs} />
    </Container>
  )
}
