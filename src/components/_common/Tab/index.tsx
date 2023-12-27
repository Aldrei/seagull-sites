import React, { useState } from 'react'

import { Content, Tab, TabList, TabsWrapper } from './styles'
import { ITabCommon } from './types'

export const TabCommon: React.FC<ITabCommon> = ({
  tabs,
  className,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <TabsWrapper className={className} {...props}>
      <TabList>
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            $isActive={Boolean(tab.id === activeTab)}
            onClick={() => setActiveTab(tab.id)}
            className={`${Boolean(tab.id === activeTab) ? 'active' : ''}`}
          >
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <Content className="tab-content">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </Content>
    </TabsWrapper>
  )
}
