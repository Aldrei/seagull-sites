import React from 'react'

import { GradientButton } from './styles'
import { IButtonCommon } from './types'

export const ButtonCommon: React.FC<IButtonCommon> = ({
  text,
  onClick,
  className,
  disabled,
  ...props
}): React.ReactElement => (
  <GradientButton
    onClick={onClick}
    className={`button-common ${className}`}
    disabled={disabled}
    {...props}
  >
    {text}
  </GradientButton>
)
