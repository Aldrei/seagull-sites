import { IProperty } from "@/types/property"

export interface ISlideCommon {
  banners: IBanner[]
}

export interface IBanner {
  thumb: string
  normal: string
  descGeral: string
  id: number
  img: string
  posicao: number
  property: IProperty
  property_id: number
}
