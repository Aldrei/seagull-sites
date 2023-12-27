import { styled } from 'styled-components'

import { TabCommon } from '@/components/_common'

export const StyledTab = styled(TabCommon)`
  ul {
    li {
      color: ${props => props.theme.color.first};
      padding: 15px 35px;

      &.active {
        background: ${props => props.theme.background.tab_button};
        border-bottom: 2px solid ${props => props.theme.color.first};
      }
    }
  }

  .tab-content {
    border: none;

    label {
      font-size: 14px;
      margin-bottom: 12px;
      margin-top: 6px;
    }
  }

  
`
