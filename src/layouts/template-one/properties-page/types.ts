import { IBoxCommon } from '@/components/_common/property/Box/types'
import { IFilterOptionsInitial } from '@/types/filter'

export interface IPropertiesPageProps {
  properties?: IBoxCommon[]
  data?: any
  filterOptionsInitial: IFilterOptionsInitial
}
