import { ButtonCommon } from '@/components/_common'
import { styled } from 'styled-components'

export const ButtonStyled = styled(ButtonCommon)`
  font-size: ${props => props.theme.fontSize.button};
  color: ${props => props.theme.color.third};
  padding: 15px 35px;
  border-radius: 0;
  background: ${props => props.theme.background.button};
  border: 1px solid ${props => props.theme.color.third};
  border-top: 1px solid ${props => props.theme.color.fourth};
  border-left: 1px solid ${props => props.theme.color.fourth};
  box-shadow: none;
`
