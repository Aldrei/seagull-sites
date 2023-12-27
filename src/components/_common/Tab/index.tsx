import React, { useState } from 'react'

import { Content, Tab, TabList, TabsWrapper } from './styles'
import { ITabCommon } from './types'

export const TabCommon: React.FC<ITabCommon> = ({ tabs, ...props }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <TabsWrapper {...props}>
      <TabList>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            $isActive={Boolean(tab.id === activeTab)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <Content>{tabs.find(tab => tab.id === activeTab)?.content}</Content>
    </TabsWrapper>
  )
}
