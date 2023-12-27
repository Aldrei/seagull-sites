import { IProperty } from '@/types/property'
// eslint-disable-next-line import/named
import { PhotoProps } from 'react-photo-gallery'

export interface IPropertyPage {
  children?: React.ReactElement
  photos?: PhotoProps[]
  property: IProperty
}
