import { ISlideCommon } from '@/components/_common/Slide/types'
import { IFilterOptionsInitial } from '@/types/filter'

export interface IHomeProps {
  children: React.ReactElement
  slideData: ISlideCommon
  filterOptionsInitial: IFilterOptionsInitial
}
