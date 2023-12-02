import React from 'react'

import { Container, SearchInput } from './styles'
import { ISearchCommon } from './types'

export const SearchCommon: React.FC<ISearchCommon> = ({}: ISearchCommon): React.ReactElement => {
  return (
    <Container>
      <SearchInput />
    </Container>
  )
}
