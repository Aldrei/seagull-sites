import { TopSectionCommon } from '@/components/_common'
import { ITopSectionCommon } from '@/components/_common/property/details/TopSection/types'
import React from 'react'

export const TopSectionOne: React.FC<ITopSectionCommon> = ({ property }) => {
  return <TopSectionCommon property={property} />
}
