import { Props } from 'react-select'

export interface ISelectCommon extends Props {
  label?: string
}

export type IOption = {
  label: string
  value: any
}
