import React from 'react';

import { GradientButton } from './styles';
import { IButtonCommon } from './types';

export const ButtonCommon: React.FC<IButtonCommon> = ({ text, handleClick, ...props }): React.ReactElement => (
  <GradientButton onClick={handleClick} {...props}>{text}</GradientButton>
);
