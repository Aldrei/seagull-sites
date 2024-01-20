import { styled } from 'styled-components'

import { SlideCommon } from '@/components/_common'

export const SlideStyled = styled(SlideCommon)`
  .keen-slider.banners {
    height: 500px;
  }

  .keen-slider.thumbnail {
    > div {
      width: auto !important;
      min-width: auto !important;
      background: ${props => props.theme.color.fourth};
    }
  }
`
