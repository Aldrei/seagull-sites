export interface ISelectCommon {
  options: IOptions[]
  name?: string
  label?: string
}

type IOptions = {
  label: string
  value: any
}
