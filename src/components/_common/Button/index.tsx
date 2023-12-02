import React from 'react';

import { GradientButton } from './styles';
import { ButtonProps } from './types';

export const ButtonCommon: React.FC<ButtonProps> = ({ text, handleClick }): React.ReactElement => (
  <GradientButton onClick={handleClick}>{text}</GradientButton>
);
