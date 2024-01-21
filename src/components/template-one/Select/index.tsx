import React from 'react'

import { ISelectCommon } from '@/components/_common/Select/types'
import { StylesConfig } from 'react-select'
import { SelectStyled } from './styles'

export const SelectOne: React.FC<ISelectCommon> = ({
  options,
  name,
  label,
  value,
  onChange,
  isMulti,
  isDisabled,
  className,
}: ISelectCommon): React.ReactElement => {
  const styles: StylesConfig = {
    control: (styles: any) => ({
      ...styles,
      borderRadius: 0,
      padding: '.50rem',
    }),
    option: (styles: any) => ({
      ...styles,
      color: '#000',
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: 'gray',
    }),
  }

  return (
    <SelectStyled
      name={name}
      className="select-common"
      options={options}
      onChange={onChange}
      value={value}
      isMulti={isMulti}
      isDisabled={isDisabled}
      styles={styles}
    />
  )
}
