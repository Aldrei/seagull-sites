import { FilterAdvanced, Tab } from '@/components/template-one'

import { TabType } from '@/components/_common/Tab/types'
import { SearchOne } from '@/components/template-one/filter/Search'

import { IFilterOptions } from '@/types/filter'
import { Container } from './styles'

export const Tabs: React.FC<IFilterOptions> = ({ filterOptions }) => {
  const tabs: TabType[] = [
    {
      id: 0,
      title: 'Filtrar Imóveis',
      content: <FilterAdvanced filterOptions={filterOptions} />,
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
