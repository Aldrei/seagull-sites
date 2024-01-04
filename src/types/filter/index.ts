import { IOption } from "@/components/_common/Select/types"

export interface IFilterOptions {
  filterOptions: {
    statesOptions?: any
    generalOptions?: any
  }
}

export interface IFilterSelected {
  states: IOption[]
  cities: IOption[]
  neighborhoods: IOption[]
  types: IOption[]
  bedrooms: IOption[]
  garages: IOption[]
  price: IOption[]
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
  label: string;
  options: IOption[];
}