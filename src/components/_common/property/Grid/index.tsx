import React, { PropsWithChildren } from 'react';
import { ListingsContainer } from './styles';
import { IGridCommon } from './types';

export const GridCommon: React.FC<PropsWithChildren<IGridCommon>> = ({ children, ...props }): React.ReactElement => {
  return (
    <ListingsContainer {...props}>{children}</ListingsContainer>
  );
};
