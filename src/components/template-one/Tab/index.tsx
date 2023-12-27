import React from 'react'

import { ITabCommon } from '@/components/_common/Tab/types'
import { StyledTab } from './styles'

export const Tab: React.FC<ITabCommon> = ({ tabs, className }: ITabCommon) => {
  return <StyledTab tabs={tabs} className={className} />
}
