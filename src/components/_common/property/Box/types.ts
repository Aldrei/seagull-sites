import { IProperty } from '@/types/property'

export interface IBoxCommon {
  property: IProperty
  orientation?: 'column' | 'row'
}
