export interface ISelect {
  options: IOptions[]
  name?: string
  label?: string
}

type IOptions = {
  label: string
  value: any
}