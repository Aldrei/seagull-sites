import React from 'react'

import { SelectCommon } from '@/components/_common'

import { useRouter } from 'next/router'
import { ButtonOne } from '../../Button'
import { Column, FormWrapper, Row } from './styled'

export const FilterAdvanced: React.FC = (): React.ReactElement => {
  const router = useRouter();

  const handleSubmit = () => {
    try {
      const mockedUrl = '/c?states%5B%5D=43&states%5B%5D=42&cities%5B%5D=5300112&cities%5B%5D=5300112&cities%5B%5D=5300113&neighborhoods%5B%5D=190&neighborhoods%5B%5D=191&types%5B%5D=Apartamento&types%5B%5D=Apartamento+Cobertura&bedrooms%5B%5D=1&bedrooms%5B%5D=3&garages%5B%5D=2&garages%5B%5D=4&priceMin=300000&priceMax=1000000&orderBy=created_at%40DESC%5B%5D=5300112&neighborhoods%5B%5D=190&types%5B%5D=Apartamento&bedrooms%5B%5D=1&garages%5B%5D=2&priceMin=300000&priceMax=1000000';

      router.push(mockedUrl);
    } catch (error) {
      console.log(error);
      
    }
  }

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
        <ButtonOne text="Filtrar" handleClick={handleSubmit} />
      </Row>
    </FormWrapper>
  )
}
