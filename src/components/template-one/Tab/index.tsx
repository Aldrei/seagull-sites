import React from 'react'

import { ITabCommon } from '@/components/_common/Tab/types'
import { StyledTab } from './styles'

export const Tab: React.FC<ITabCommon> = ({ tabs }: ITabCommon) => {
  return <StyledTab tabs={tabs} />
}
