import { IPhoto, IProperty } from '@/types/property'
// eslint-disable-next-line import/named

export interface IPropertyPage {
  children?: React.ReactElement
  photos?: IPhoto[]
  property: IProperty
}
