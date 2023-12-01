import React from 'react';

import { SelectCommon } from '@/components/_common'

import { FormWrapper, Row, Button } from './styled';

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
      <Button>Filtrar</Button>
    </FormWrapper>
  );
};
