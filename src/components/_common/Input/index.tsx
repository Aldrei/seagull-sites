import React from 'react'

import { Container, Input, Label } from './styles'
import { IInputCommon } from './types'

export const InputCommon: React.FC<IInputCommon> = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  ...props
}: IInputCommon): React.ReactElement => {
  return (
    <Container {...props}>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} placeholder={placeholder} onChange={onChange} value={value} />
    </Container>
  )
}
