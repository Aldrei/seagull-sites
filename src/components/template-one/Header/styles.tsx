import { styled } from 'styled-components'

import { HeaderCommon } from '@/components/_common'

export const HeaderStyled = styled(HeaderCommon)`
  background: ${props => props.theme.background.header};
`
