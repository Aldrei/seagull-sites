import { ISlideCommon } from '@/components/_common/Slide/types'
import { IFilterOptionsInitial } from '@/types/filter'
import { IProperty } from '@/types/property'

export interface IHomeProps {
  children: React.ReactElement
  slideData: ISlideCommon
  filterOptionsInitial: IFilterOptionsInitial
  propertiesFeaturedList: IProperty[]
}
