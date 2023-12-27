export interface ITabCommon {
  tabs: TabType[]
  className?: string
}

export type TabType = {
  id: number
  title: string
  content: React.ReactNode
}
