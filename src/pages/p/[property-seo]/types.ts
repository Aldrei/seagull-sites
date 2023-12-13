import { IProperty } from "@/types/property"
import { PhotoProps } from "react-photo-gallery"

export interface IPageProps {
  data: any
  repos: any
  photos: PhotoProps[]
  property: IProperty
}
