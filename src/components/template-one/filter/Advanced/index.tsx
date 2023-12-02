import React from 'react';

import { SelectCommon } from '@/components/_common';

import { ButtonOne } from '../../Button/styles';
import { Column, FormWrapper, Row } from './styled';

export const FilterAdvanced: React.FC = (): React.ReactElement => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <FormWrapper>
      <Row>
        <SelectCommon options={options} />
      </Row>
      <Row>
        <SelectCommon options={options} />
      </Row>
      <Row>
        <Column>
          <SelectCommon options={options} />
        </Column>
        <Column>
          <SelectCommon options={options} />
        </Column>
      </Row>
      <Row>
        <ButtonOne text='Filtrar' handleClick={() => {}} />
      </Row>
    </FormWrapper>
  );
};
