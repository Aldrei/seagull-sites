import React, { useId } from 'react'

import Select from "react-select"

import { ISelect } from './types'
import { Container } from './styles'

export const SelectCommon: React.FC<ISelect> = ({ options, ...props }: ISelect): React.ReactElement => {
  
  return (
    <Container>
      <Select instanceId={useId()} options={options} {...props} />
    </Container>
  )
}
