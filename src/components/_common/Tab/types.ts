export interface ITabCommon {
  tabs: TabType[]
}

export type TabType = {
  id: number
  title: string
  content: React.ReactNode
}
