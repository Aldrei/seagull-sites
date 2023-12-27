import React, { useId } from 'react'

import Select from 'react-select'

import { Container, Label } from './styles'
import { ISelectCommon } from './types'

export const SelectCommon: React.FC<ISelectCommon> = ({
  options,
  name,
  label,
  ...props
}): React.ReactElement => {
  return (
    <Container {...props}>
      <Label htmlFor={name}>{label}</Label>
      <Select
        name={name}
        className="select-common"
        instanceId={useId()}
        options={options}
        {...props}
      />
    </Container>
  )
}
