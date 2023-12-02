import React, { useId } from 'react'

import Select from "react-select"

import { Container, Label } from './styles'
import { ISelect } from './types'

export const SelectCommon: React.FC<ISelect> = ({ options, name, label, ...props }: ISelect): React.ReactElement => {
  
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Select name={name} className='select-common' instanceId={useId()} options={options} {...props} />
    </Container>
  )
}
