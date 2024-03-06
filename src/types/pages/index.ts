import { IFilterOptionsInitial } from '@/types/filter'
import { IPhoto, IProperty } from '@/types/property'

export interface ICPage {
  data?: any
  filterOptionsInitial: IFilterOptionsInitial
}

export interface IPageProps {
  photos: IPhoto[]
  property: IProperty
}

import { ISlideCommon } from '@/components/_common/Slide/types'

export interface IHomeProps {
  children: React.ReactElement
  slideData: ISlideCommon
  filterOptionsInitial: IFilterOptionsInitial
  propertiesFeaturedList: IProperty[]
  gqlData?: any
}
