import { styled } from 'styled-components'

import { InputCommon } from '../Input'

export const SearchInput = styled(InputCommon)`
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.background.input};
  border: 1px solid ${props => props.theme.color.seventh};

  input {
    padding: ${props => props.theme.spaces.lg} ${props => props.theme.spaces.lg};
    color: ${props => props.theme.color.white};
  }
`

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`
