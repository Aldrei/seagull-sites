import React, { PropsWithChildren } from 'react';
import { ListingsContainer } from './styles';
import { IGridCommonProps } from './types';

export const GridCommon: React.FC<PropsWithChildren<IGridCommonProps>> = ({ children }): React.ReactElement => {
  return (
    <ListingsContainer>{children}</ListingsContainer>
  );
};
