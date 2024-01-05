import React, { useId } from 'react'

import Select, { Props } from 'react-select'

import { Container, Label } from './styles'
import { ISelectCommon } from './types'

export const SelectCommon: React.FC<ISelectCommon & Props> = ({
  options,
  name,
  label,
  value,
  onChange,
  isMulti,
  isDisabled,
  className,
}): React.ReactElement => {
  return (
    <Container className={className}>
      <Label htmlFor={name}>{label}</Label>
      <Select
        name={name}
        className="select-common"
        instanceId={useId()}
        options={options}
        onChange={onChange}
        value={value}
        isMulti={isMulti}
        isDisabled={isDisabled}
        styles={{
          option: styles => ({
            ...styles,
            color: '#000',
          }),
        }}
      />
    </Container>
  )
}
