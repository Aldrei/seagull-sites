import { IProperty } from "@/types/property"

export interface ISlideCommon {
  banners: IBanner[]
}

export interface IBanner {
  thumb: string
  normal: string
  titulo: string
  descGeral: string
  id: number
  img: string
  posicao: number
  property: {
    data: IProperty
  }
  property_id: number
}
