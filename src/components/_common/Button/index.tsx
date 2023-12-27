import React from 'react'

import { GradientButton } from './styles'
import { IButtonCommon } from './types'

export const ButtonCommon: React.FC<IButtonCommon> = ({
  text,
  handleClick,
  className,
  ...props
}): React.ReactElement => (
  <GradientButton onClick={handleClick} className={`button-common ${className}`} {...props}>
    {text}
  </GradientButton>
)
