import { styled } from 'styled-components'

import { InputCommon } from '../Input'

export const SearchInput = styled(InputCommon)`
  border: 1px solid blue;
  padding: 5px;

  input {
    //
  }
`

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`