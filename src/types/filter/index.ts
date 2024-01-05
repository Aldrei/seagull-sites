import { IOption } from '@/components/_common/Select/types'

export interface IFilterOptionsInitial {
  statesOptions?: any
  generalOptions?: any
  selectedOptions?: IOptionsSelectedFromApi
  options?: IFilterOptions
}

export interface IOptionsSelectedFromApi {
  states: any[]
  cities: any[]
  neighborhoods: any[]
  types: any[]
  bedrooms: any[]
  garages: any[]
  priceMin: any
  priceMax: any
}

export interface IFilterSelected {
  states: IOption[]
  cities: IOption[]
  neighborhoods: IOption[]
  types: IOption[]
  bedrooms: IOption[]
  garages: IOption[]
  price: IOption
}

export interface IFilterOptions {
  states: IOption[]
  cities: IGroupedOption[]
  neighborhoods: IGroupedOption[]
  types: IOption[]
  bedrooms: IOption[]
  garages: IOption[]
  prices: IOption[]
}

export interface IGroupedOption {
  label: string
  options: IOption[]
}
