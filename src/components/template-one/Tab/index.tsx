import React from 'react'

import { ITabComponent } from '@/components/_common/Tab/types'
import { StyledTab } from './styles'

export const Tab: React.FC<ITabComponent> = ({ tabs }: ITabComponent) => {
  return <StyledTab tabs={tabs} />
}
