import { IProperty } from "@/types/property"
import { PhotoProps } from "react-photo-gallery"

export interface IPropertyPage {
  children?: React.ReactElement
  photos?: PhotoProps[]
  property: IProperty
}
