import React from 'react'

import { SelectCommon } from '@/components/_common'

import { ButtonOne } from '../../Button'
import { Column, FormWrapper, Row } from './styled'

export const FilterAdvanced: React.FC = (): React.ReactElement => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <FormWrapper>
      <Row>
        <SelectCommon options={options} label="Tipo(opcional)" />
      </Row>
      <Row>
        <Column>
          <SelectCommon options={options} label="Dormitório(opcional)" />
        </Column>
        <Column>
          <SelectCommon options={options} label="Garagem(opcional)" />
        </Column>
      </Row>
      <Row>
        <SelectCommon options={options} label="Estado(opcional)" />
      </Row>
      <Row>
        <SelectCommon options={options} label="Cidades(opcional)" />
      </Row>
      <Row>
        <SelectCommon options={options} label="Bairro(opcional)" />
      </Row>
      <Row>
        <SelectCommon options={options} label="Faixa de preço" />
      </Row>
      <Row>
        <ButtonOne text="Filtrar" handleClick={() => {}} />
      </Row>
    </FormWrapper>
  )
}
