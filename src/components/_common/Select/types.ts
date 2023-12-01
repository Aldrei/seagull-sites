export interface ISelect {
  options: IOptions[]
}

type IOptions = {
  label: string
  value: any
}