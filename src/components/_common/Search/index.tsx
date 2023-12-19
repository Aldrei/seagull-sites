import React from 'react'

import { Container, SearchInput } from './styles'
import { ISearchCommon } from './types'

export const SearchCommon: React.FC<ISearchCommon> = ({ ...props }): React.ReactElement => {
  return (
    <Container {...props}>
      <SearchInput />
    </Container>
  )
}
